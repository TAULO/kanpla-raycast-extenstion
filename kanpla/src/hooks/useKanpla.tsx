import { usePromise } from "@raycast/utils";
import Kanpla from "@taulo1999/kanpla-api/dist/Kanpla";
import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  email: string;
  password: string;
  firebaseAPIKey: string;
  firebaseModuleId: string;
}

let kanplaClient: Kanpla | null = null;

function getKanplaClient() {
  if (!kanplaClient) {
    const { email, password, firebaseAPIKey, firebaseModuleId } = getPreferenceValues<Preferences>();
    kanplaClient = new Kanpla({
      email,
      password,
      firebaseAPIKey,
      firebaseModuleId,
      language: "en",
    });
  }
  return kanplaClient;
}

export function useMenusByDate(date: Date) {
  return usePromise(
    async () => {
      return await getKanplaClient().getMenusByDate(date);
    },
    [],
    { execute: !!date },
  );
}

export function useTodayMenu() {
  return usePromise(async () => {
    return await getKanplaClient().getTodayMenu();
  });
}

export function useThisWeeksMenu() {
  return usePromise(async () => {
    return await getKanplaClient().getThisWeekMenu();
  });
}

export function useNextWeeksMenu() {
  return usePromise(async () => {
    return await getKanplaClient().getNextWeekMenu();
  });
}

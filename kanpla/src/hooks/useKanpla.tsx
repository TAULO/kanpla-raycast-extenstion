
import { usePromise } from "@raycast/utils";
import Kanpla from "@taulo1999/kanpla-api/dist/Kanpla";
import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  email: string;
  password: string;
  firebaseAPIKey: string;
  firebaseModuleId: string;
}

function getKanplaClient() {
  const { email, password, firebaseAPIKey, firebaseModuleId } = getPreferenceValues<Preferences>();
  return new Kanpla({
    email,
    password,
    firebaseAPIKey,
    firebaseModuleId,
    language: "en",
  });
}

export function useMenusByDate(date: Date) {
  return usePromise(async () => {
    const kanpla = getKanplaClient();
    return await kanpla.getMenusByDate(date);
  }, [], { execute: !!date });
}

export function useTodayMenu() {
  return usePromise(async () => {
    const kanpla = getKanplaClient();
    return await kanpla.getTodayMenu();
  });
}

export function useThisWeeksMenu() {
  return usePromise(async () => {
    const kanpla = getKanplaClient();
    return await kanpla.getThisWeekMenu();
  });
}

export function useNextWeeksMenu() {
  return usePromise(async () => {
    const kanpla = getKanplaClient();
    return await kanpla.getNextWeekMenu();
  });
}
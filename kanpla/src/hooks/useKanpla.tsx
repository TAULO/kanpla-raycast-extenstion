import { usePromise } from "@raycast/utils";
import Kanpla from "@taulo1999/kanpla-api/dist/Kanpla";
import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  email: string;
  password: string;
  firebaseAPIKey: string;
  firebaseModuleId: string;
}

function formatMarkdown(item: any) {
  return `## ${item.name}
* ${item?.menu?.name ?? "No menu"}`;
}

export default function useKanpla() {
  const { email, password, firebaseAPIKey, firebaseModuleId } = getPreferenceValues<Preferences>();

  const kanpla = new Kanpla({
    email,
    password,
    firebaseAPIKey,
    firebaseModuleId,
    language: "en",
  });

  const getMenusByDate = (date: Date) => {
    if (!date) throw new Error("Date is required");

    return usePromise(async () => {
      const response = await kanpla.getMenusByDate(date);
      return response.map(formatMarkdown);
    });
  };

  const getTodayMenu = () => {
    return usePromise(async () => {
      const response = await kanpla.getTodayMenu();
      return response.map(formatMarkdown);
    });
  };

  return { getMenusByDate, getTodayMenu };
}

import { Detail, getPreferenceValues } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import Kanpla from "@taulo1999/kanpla-api/dist/Kanpla";

interface Preferences {
  email: string;
  password: string;
  firebaseAPIKey: string;
  firebaseModuleId: string;
}

export default function Command() {
  const { email, password, firebaseAPIKey, firebaseModuleId } = getPreferenceValues<Preferences>();

  const kanpla = new Kanpla({
    email,
    password,
    firebaseAPIKey,
    firebaseModuleId,
    language: "en",
  });

  const { isLoading, data } = usePromise(async () => {
    return await kanpla.getTodayMenu();
  });

  const menu = data?.menu?.map((item: any) => item.name).join("\n");

  const markdown = isLoading
    ? "Loading today's menu..."
    : menu
      ? `# 🍽️ Today's Menu\n\n${menu}`
      : "No menu available for today.";

  return <Detail isLoading={isLoading} markdown={markdown} />;
}

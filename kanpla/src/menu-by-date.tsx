import { Detail, getPreferenceValues, LaunchProps } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import Kanpla from "@taulo1999/kanpla-api/dist/Kanpla";

interface Preferences {
  email: string;
  password: string;
  firebaseAPIKey: string;
  firebaseModuleId: string;
}

export default function Command(props: LaunchProps<{ arguments: any }>) {
  const { email, password, firebaseAPIKey, firebaseModuleId } = getPreferenceValues<Preferences>();

  const kanpla = new Kanpla({
    email,
    password,
    firebaseAPIKey,
    firebaseModuleId,
    language: "en",
  });

  const { isLoading, data } = usePromise(async () => {
    const response = await kanpla.getMenusByDate(new Date(props.arguments.date));
    return response.map((item: any) => item?.menu?.name ?? 'No menus');
  });


  console.log(data)
  // const menus = data?.map((menu: any) => menu?.name)?.join('\n') || "No menus available for date: " + props.arguments.date;

  // console.log(data?.[0])

  const markdown = isLoading
    ? "Loading menu for " + props.arguments.date + "..."
    : data?.join('\n') || "No menus available for date: " + props.arguments.date;

  return <Detail isLoading={isLoading} markdown={markdown} />;
}

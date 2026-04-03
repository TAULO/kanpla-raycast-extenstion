import { Detail, LaunchProps } from "@raycast/api";
import useKanpla from "./hooks/useKanpla";

export default function Command(props: LaunchProps<{ arguments: any }>) {
  const date = props.arguments.date;
  const kanpla = useKanpla();
  const { isLoading, data } = kanpla.getMenusByDate(new Date(date));

  const markdown = isLoading
    ? "Loading menu for " + date + "..."
    : data?.slice(0, 2)?.join("\n\n") || "No menus available for date: " + date;

  return <Detail isLoading={isLoading} markdown={markdown} />;
}

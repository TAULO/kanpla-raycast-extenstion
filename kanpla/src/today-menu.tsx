import { Detail } from "@raycast/api";
import useKanpla from "./hooks/useKanpla";

export default function Command() {
  const kanpla = useKanpla();
  const { isLoading, data } = kanpla.getTodayMenu();

  const markdown = isLoading ? "Loading menu..." : data?.slice(0, 2)?.join("\n\n") || "No menus available today";

  return <Detail isLoading={isLoading} markdown={markdown} />;
}

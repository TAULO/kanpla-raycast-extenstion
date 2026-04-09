import useKanpla from "./hooks/useKanpla";
import { WeekView } from "./components/WeekView";

export default function Command() {
  const kanpla = useKanpla();
  const { isLoading, data } = kanpla.getThisWeeksMenu();

  return <WeekView isLoading={isLoading} data={data} noMenuText={"No menus found for this week"}></WeekView>;
}
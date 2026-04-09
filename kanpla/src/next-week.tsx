import useKanpla from "./hooks/useKanpla";
import { WeekMenu } from "@taulo1999/kanpla-api";
import { WeekView } from "./components/WeekView";

export default function Command() {
  const kanpla = useKanpla();
  const { isLoading, data } = kanpla.getNextWeeksMenu();

  return <WeekView isLoading={isLoading} data={data as WeekMenu} noMenuText={'No menus found for next week'}></WeekView>;
}

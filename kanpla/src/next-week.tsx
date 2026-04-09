import { WeekMenu } from "@taulo1999/kanpla-api";
import { WeekView } from "./components/WeekView";
import { useNextWeeksMenu } from "./hooks/useKanpla";

export default function Command() {
  const { isLoading, data } = useNextWeeksMenu();

  return <WeekView isLoading={isLoading} data={data} noMenuText={'No menus found for next week'}></WeekView>;
}

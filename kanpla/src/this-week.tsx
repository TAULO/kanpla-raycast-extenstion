import { WeekView } from "./components/WeekView";
import { useThisWeeksMenu } from "./hooks/useKanpla";

export default function Command() {
  const { data, isLoading } = useThisWeeksMenu();
  return <WeekView isLoading={isLoading} data={data} noMenuText={"No menus found for this week"}></WeekView>;
}
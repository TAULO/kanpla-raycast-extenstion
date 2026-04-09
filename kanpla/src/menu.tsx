import { List, LaunchProps } from "@raycast/api";
import { IMenuItem } from "@taulo1999/kanpla-api";
import { ListItemView } from "./components/ListItemView";
import { MenuListContainer } from "./components/MenuListContainer";
import { useMenusByDate, useTodayMenu } from "./hooks/useKanpla";

export default function Command(props: LaunchProps<{ arguments: { date: string } }>) {
  const date = props.arguments.date;

  const { isLoading, data } = date ? useMenusByDate(new Date(date)) : useTodayMenu();
  const onlyWithMenus = data?.filter((item: IMenuItem) => item.menu && item.menu.name) ?? [];

  const noMenuText = date ? "No menus found for this date" : "No menus found for today";

  return (
    <MenuListContainer isLoading={isLoading} data={onlyWithMenus} noMenuText={noMenuText}>
      {onlyWithMenus.map((item: IMenuItem, index: number) => {
        return <ListItemView item={item} index={index} key={index} />
      })}
    </MenuListContainer>
  );
}

import { List } from "@raycast/api";
import { IMenuItem, WeekMenu } from "@taulo1999/kanpla-api";
import { ListItemView } from "./ListItemView";

interface IWeekViewProps {
  isLoading: boolean;
  data: WeekMenu | undefined;
  noMenuText: string;
}

export const WeekView = ({ isLoading, data, noMenuText }: IWeekViewProps) => {
  const objectEntries = Object.entries(data ?? {});

  return (
    <List isLoading={isLoading} isShowingDetail>
      {objectEntries.length === 0 ? (
        <List.EmptyView title={noMenuText} />
      ) : (
        objectEntries.map(([date, items], parentIndex) => {
          const onlyWithMenus = items.filter((item: IMenuItem) => item.menu && item.menu.name);
          if (onlyWithMenus.length === 0) return null;

          return (
            <List.Section
              key={`${data}-${parentIndex}`}
              title={new Date(date).toLocaleDateString("en-DK", { weekday: "long", day: "numeric", month: "long" })}
            >
              {onlyWithMenus.slice(0, 2).map((item, childIndex) => (
                <ListItemView item={item} index={childIndex} key={childIndex}></ListItemView>
              ))}
            </List.Section>
          );
        })
      )}
    </List>
  );
};

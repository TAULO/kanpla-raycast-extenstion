import { List } from "@raycast/api";
import { WeekMenu } from "@taulo1999/kanpla-api";
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
        objectEntries.map(([date, items]) => (
          <List.Section
            key={date}
            title={new Date(date).toLocaleDateString("en-DK", { weekday: "long", day: "numeric", month: "long" })}
          >
            {items.slice(0, 2).map((item, index) => (
              <ListItemView item={item} index={index}></ListItemView>
            ))}
          </List.Section>
        ))
      )}
    </List>
  );
};

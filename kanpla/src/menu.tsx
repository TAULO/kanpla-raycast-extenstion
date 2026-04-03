import { List, LaunchProps, ActionPanel, Action } from "@raycast/api";
import useKanpla from "./hooks/useKanpla";
import { IMenuItem } from "@taulo1999/kanpla-api";

export default function Command(props: LaunchProps<{ arguments: { date: string } }>) {
  const date = props.arguments.date;
  const kanpla = useKanpla();

  const { isLoading, data } = date ? kanpla.getMenusByDate(new Date(date)) : kanpla.getTodayMenu();

  return (
    <List isLoading={isLoading} isShowingDetail>
      {data?.map((item: IMenuItem, index: number) => {
        return (
          <List.Item
            key={index}
            title={item.menu?.name ?? "No menu"}
            subtitle={item.name}
            detail={
              <List.Item.Detail
                markdown={item.photo ? `![](${item.photo})` : ""}
                metadata={
                  <List.Item.Detail.Metadata>
                    <List.Item.Detail.Metadata.Separator />
                    <List.Item.Detail.Metadata.Label title="Dish" text={item.menu?.name ?? "No menu"} />
                    <List.Item.Detail.Metadata.Label title="Category" text={item.name} />
                    <List.Item.Detail.Metadata.Separator />
                    <List.Item.Detail.Metadata.Link
                      title="Lunch"
                      target="https://app.kanpla.io/app"
                      text="Sign up in Kanpla"
                    />
                  </List.Item.Detail.Metadata>
                }
              />
            }
            actions={
              <ActionPanel>
                <Action.OpenInBrowser title="Sign up in Kanpla" url="https://app.kanpla.io/app" />
              </ActionPanel>
            }
          />
        );
      })}
    </List>
  );
}

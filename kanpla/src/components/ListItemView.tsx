import { Action, ActionPanel, List } from "@raycast/api";
import { IMenuItem } from "@taulo1999/kanpla-api";

interface IListItemView {
  item: IMenuItem;
  index: number;
}

export const ListItemView = ({ item, index }: IListItemView) => (
  <List.Item
    key={index}
    title={item.menu?.name ?? "No menu"}
    detail={
      <List.Item.Detail
        markdown={item.photo ? `![](${item.photo})` : ""}
        metadata={
          <List.Item.Detail.Metadata>
            <List.Item.Detail.Metadata.Label title="Dish" text={item.menu?.name ?? "No menu"} />
            <List.Item.Detail.Metadata.Label title="Category" text={item.name} />
            <List.Item.Detail.Metadata.Separator />
            <List.Item.Detail.Metadata.Link title="Lunch" target="https://app.kanpla.io/app" text="Sign up in Kanpla" />
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

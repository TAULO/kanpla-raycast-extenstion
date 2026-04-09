import { Action, ActionPanel, List } from "@raycast/api";

interface IRaycastListItem {
  item: any;
  index: number;
}

export const ListItemView = ({ item, index }: IRaycastListItem) => (
  <List.Item
    key={index}
    title={item.menu?.name ?? "No menu"}
    subtitle={item.name}
    detail={
      <List.Item.Detail
        markdown={item.photo ? `![](${item.photo})` : ""}
        metadata={
          <List.Item.Detail.Metadata>
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
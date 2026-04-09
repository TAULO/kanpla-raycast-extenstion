import { List } from "@raycast/api";
import { PropsWithChildren } from "react";
import { IMenuItem } from "@taulo1999/kanpla-api";

interface INoDataViewProps {
  isLoading: boolean;
  data: Array<IMenuItem>;
  noMenuText: string;
}

export const MenuListContainer = ({ isLoading, data, noMenuText, children }: PropsWithChildren<INoDataViewProps>) => (
  <List isLoading={isLoading} isShowingDetail={data.length > 0}>
    {data.length === 0 ? <List.EmptyView title={noMenuText} /> : children}
  </List>
);

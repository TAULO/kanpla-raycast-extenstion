import { List } from "@raycast/api";
import { PropsWithChildren } from "react";

interface INoDataViewProps {
  isLoading: boolean;
  data: Array<any>;
  noMenuText: string;
}

export const MenuListContainer = ({ isLoading, data, noMenuText, children }: PropsWithChildren<INoDataViewProps>) => (
  <List isLoading={isLoading} isShowingDetail={data.length > 0}>
    {data.length === 0 ? <List.EmptyView title={noMenuText} /> : children}
  </List>
);

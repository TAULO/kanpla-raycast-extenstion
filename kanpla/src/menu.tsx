import { Detail, LaunchProps } from "@raycast/api";
import useKanpla from "./hooks/useKanpla";

export default function Command(props: LaunchProps<{ arguments: any }>) {
  const date = props.arguments.date;
  const kanpla = useKanpla();

  const { isLoading, data } = date ? kanpla.getMenusByDate(new Date(date)) : kanpla.getTodayMenu();
  const loadingText = date ? "Fetching menu for " + date + "..." : "Fetching today's menu...";
  const noMenuText = date ? "No menus available for date: " + date : "No menus available today";

  const splitData = data?.slice(0, 2);
  const photos = splitData
    ?.map((item: any) => (item?.photo ? `![](${item.photo})` : ""))
    ?.join("\n\n");
  const markdown = isLoading ? loadingText : photos || noMenuText;

  return (
    <Detail
      markdown={markdown}
      metadata={
        <Detail.Metadata>
          {splitData?.map((item: any, index: number) => (
            <Detail.Metadata.Label key={index} title={item.name} text={item.menu?.name ?? "No menu"} />
          ))}
        </Detail.Metadata>
      }
    />
  );
  // return <Detail isLoading={isLoading} markdown={markdown} />;
}

export function formatMarkdown(item: any) {
  const menu = item?.menu?.name ?? "No menu";
  const photo = item?.photo ? `![](${item.photo}&w=300&h=200&fit=crop)` : "";

  return `###### ${item.name}
## ${menu}
${photo}`;
}

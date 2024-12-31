export const formatDatetime = (datetime: any) => {
  const d = new Date(datetime);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

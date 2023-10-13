export const getId = (link) => {
  const url = link;
  const match = url.match(/\/(\d+)\//);

  if (match) {
    const id = match[0];
    const goodId = id.replace(/\//g, "");
    return goodId;
  }
};

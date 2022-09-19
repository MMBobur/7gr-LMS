function toUpperFISH(str) {
  let arr = str.split(" ");
  let ar = arr.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  return ar.join(" ");
}

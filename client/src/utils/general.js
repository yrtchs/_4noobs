export function formatIfNotExistData(data) {
  if (data === typeof "Array") {
    console.log(data);
    return data.length ? data.map((el) => el) : "-";
  } else {
    return data ? data : "-";
  }
}

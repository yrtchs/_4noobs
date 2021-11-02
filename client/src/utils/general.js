export function formatIfNotExistData(data) {
  if (data === typeof "Array") {
    return data.length ? data.map((el) => el) : "-";
  } else {
    return data ? data : "-";
  }
}

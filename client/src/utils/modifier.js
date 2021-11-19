export const addNewItem = (itemList, itemToAdd) => {
  itemList.push(itemToAdd);
  return itemList;
};

export const updateItem = (itemList, itemToUpdate) => {
  const item = itemList.find((item) => item.id === itemToUpdate.id);
  itemList[itemList.indexOf(item)] = itemToUpdate;
  return itemList;
};

export const deleteItem = (itemList, id) => {
  console.log(itemList);
  console.log("id", id);
  return itemList.filter((item) => item._id !== id);
};

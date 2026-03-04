import Menu from "../Models/Menu.model.js";

const fetchMenu = async (query: any) => {
  const menu = await Menu.find(query);

  return menu;
};

export default {fetchMenu};

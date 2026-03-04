import { MenuQuery } from "../utils/interface.js";
import UserRepo from "../Repositories/user.repositories.js";
const getMenu = async (query: MenuQuery) => {
  const menu = await UserRepo.fetchMenu(query);

  if (!menu) {
    throw new Error("Item Not Found");
  }

  return menu;
};

export default { getMenu };

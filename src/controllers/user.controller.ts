import type { Request, Response } from "express";
import { MenuQuery } from "../utils/interface.js";
import userService from "../services/user.service.js";
const getMenu = async (req: Request<{}, {}, {}, MenuQuery>, res: Response) => {
  try {
    const { category, price, isVeg } = req.query;
    const filter: MenuQuery = {
      ...(category && { category }),
      ...(price && { price: Number(price) }),
      ...(isVeg !== undefined && { isVeg }),
    };
    const Menu = await userService.getMenu(filter);
    res.status(200).json({
      message: "Here is Your Menu",
      Menu,
    });
  } catch (error) {}
};

export default { getMenu };

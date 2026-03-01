import { z } from "zod";

const menuItemZod = z.object({
  foodName: z.string().min(1, "Food name is required").trim(),

  description: z.string().optional().default(""),

  price: z.number().min(0, "Price must be >= 0"),

  category: z.string().min(1, "Category is required"),

  isVeg: z.boolean().optional().default(false),

  isAvailable: z.boolean().optional().default(true),

  image: z.string().optional().or(z.literal("")),
});

export { menuItemZod };

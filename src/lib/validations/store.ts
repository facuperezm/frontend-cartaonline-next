import * as z from "zod";

export const updateStoreSchema = z.object({
  name: z.string().min(3).max(50),
  address: z.string().optional(),
  city: z
    .enum([
      "Buenos_Aires",
      "Puerto_Iguazu",
      "Corrientes",
      "Posadas",
      "Ushuaia",
      "Cordoba",
    ])
    .optional(),
});

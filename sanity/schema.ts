import { type SchemaTypeDefinition } from "sanity";
import product from "./schemas/product";
import giftCard from "./schemas/giftCard";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, giftCard],
};

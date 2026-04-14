import ky from "ky";
import { type Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const products = await ky
    .get(
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
    )
    .json<Product[]>();

  return products.map((product, index) => ({
    ...product,
    image: new URL(
      `../assets/img${index === 0 ? "" : ` (${index})`}.jpg`,
      import.meta.url,
    ).href,
  }));
};

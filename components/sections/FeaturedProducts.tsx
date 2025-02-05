import React, { FC } from "react";

import { Product } from "@/types/interfaces";

// Components
import Section from "./Section";
import ProductGrid from "@components/product/ProductGrid";
import Button from "@components/ui/Button";

type T = {
  products: Product[];
  title: string;
  showButton: boolean;
};

const FeaturedProducts: FC<T> = ({ products, title, showButton }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <ProductGrid products={products} />
      {showButton && (
        <Button href="/products" buttonStyle="outlined">
          See all products
        </Button>
      )}
    </Section>
  );
};

export default FeaturedProducts;

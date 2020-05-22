import React, { FC } from "react";
import styled from "styled-components";
import { Product, ProductVariant, ProductImage } from "@/interfaces";
import Link from "next/link";

import ProductImageComponent from "./ProductImage";
import ProductShortInfo from "./ProductShortInfo";

type T = {
  product: Product;
};

const ProductCardComponent: FC<T> = ({ product }) => {
  const price: string = product.variants[0].price;
  const productImage: ProductImage = product.images[0];

  return (
    <Link href={`/products/${product.handle}`}>
      <ProductCard>
        {/* Image */}
        <ProductImageComponent productImage={productImage} />

        {/* Info */}
        <ProductShortInfo
          price={price}
          productType={product.productType}
          title={product.title}
        />
      </ProductCard>
    </Link>
  );
};

const ProductCard = styled.div`
  max-width: 400px;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;

  .type {
    text-transform: uppercase;
  }

  img {
    max-width: 100%;
  }

  p {
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  .title {
    margin-top: 0;
  }
`;

export default ProductCardComponent;

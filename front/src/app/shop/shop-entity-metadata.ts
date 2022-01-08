import { EntityMetadataMap } from "@ngrx/data";
import { IProductModel } from "./products/product.model";

export const shopEntityMetaData: EntityMetadataMap = {
  Product: {
    selectId: (prodcut: IProductModel) => prodcut.productId
  }
}

const pluralNames = { Product: 'Products' };

export const entityConfig = {
  shopEntityMetaData,
  pluralNames
};
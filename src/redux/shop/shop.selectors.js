import { createSelector } from "reselect";

const shop = state => state.shop;

export const selectShopSections = createSelector([shop], shop => shop);

export const selectCollectionForPrievew = createSelector(
  [selectShopSections],
  collections => Object.keys(collections).map(key=> collections[key])
)
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopSections],
    collections => collections[collectionUrlParam]
  );

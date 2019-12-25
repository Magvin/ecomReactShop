import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopSections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector(
  [selectShopSections],
  collections => collections ? Object.keys(collections).map(key=> collections[key]  ) : []
 
);

export const selectCollection = collectionUrlParam =>createSelector([selectCollectionsForPreview], collections => (
    collections ?  collections.filter(collection=> collection.routeName === collectionUrlParam) : null
     
    )
)
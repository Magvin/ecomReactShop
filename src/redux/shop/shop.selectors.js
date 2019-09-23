import { createSelector } from 'reselect';

const shop  = state => state.shop;

export const selectShopSections = createSelector(
    [shop],
    shop => shop
)
import SHOP_DATA from '../../components/pages/shop/shop.data'

const shopDataReducer = (state = SHOP_DATA, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default shopDataReducer;
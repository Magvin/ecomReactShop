import React from 'react';

//Redux and Reselect
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
//Components
import PreviewCollection from '../../preview-collections/preview-collection.component';
import { selectShopSections } from '../../../redux/shop/shop.selectors';

const ShopPage=({shop})=>{

        return(
            <div className="shop-page">
            {
               shop.map(({id, ...otherCollectionProps})=>(
                    <PreviewCollection key={id}{...otherCollectionProps} />
                ))
            }
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector({
    shop:selectShopSections
})

export default connect(mapStateToProps)(ShopPage);
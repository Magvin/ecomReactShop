import React from 'react';
import SHOP_DATA from './shop.data'

//Components
import PreviewCollection from '../../preview-collections/preview-collection.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
        
    }

    render() {
        const { collections } = this.state;
        return(
            <div className="shop-page" style={{padding:'20px'}}>
            {
                collections.map(({id, ...otherCollectionProps})=>(
                    <PreviewCollection key={id}{...otherCollectionProps} />
                ))
            }
            </div>
        )
    }
}

export default ShopPage;
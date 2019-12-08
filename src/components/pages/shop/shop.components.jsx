import React from 'react';
// Route
import { Route } from 'react-router-dom';
// Component
import CollectionsOverview from '../../collections-overview/collections-overview.component'

const ShopPage=({ match })=>{

        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            </div>
        )
    
}



export default ShopPage;
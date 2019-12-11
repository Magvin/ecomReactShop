import React from 'react';
// Route
import { Route } from 'react-router-dom';
// Component
import CollectionsOverview from '../../collections-overview/collections-overview.component'
import CategoryPage from '../category/category.components';


const ShopPage=({ match })=>{
    console.log(match)
        return(
            <div className="shop-page">
                <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>

                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            </div>
        )
    
}



export default ShopPage;
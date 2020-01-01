import React from 'react';
// Route
import { Route } from 'react-router-dom';
// Component Containers
import CollectionsOverviewContainer from '../../collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container';
// Redux
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../../redux/shop/shop.actions'




class ShopPage extends React.Component {
    
    unsubscibeFromSnapshot = null;
   
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
         
    }

    render() {
        const { match } = this.props

        
        return(
            <div className="shop-page">

                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                



            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);
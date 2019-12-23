import React from 'react';
// Route
import { Route } from 'react-router-dom';
// Component
import CollectionsOverview from '../../collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.components';
// Redux
import { connect } from 'react-redux';
import { updateCollections } from '../../../redux/shop/shop.actions'

// Utils
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.utils';


class ShopPage extends React.Component {
    unsubscibeFromSnapshot = null;
   
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapshot => {
            const collectionMap =   convertCollectionsSnapshotToMap(snapshot);
            console.log('collectionMap',collectionMap)
            updateCollections(collectionMap);
        })

        
    }
    render() {
        const { match} = this.props

        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>

            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);
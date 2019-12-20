import React from 'react';
// Route
import { Route } from 'react-router-dom';
// Component
import CollectionsOverview from '../../collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.components';

// Utils
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.utils';


class ShopPage extends React.Component {
    unsubscibeFromSnapshot = null;
   
    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async(snapshot)=> {
           convertCollectionsSnapshotToMap(snapshot)
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



export default ShopPage;
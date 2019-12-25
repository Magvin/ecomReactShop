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
import WithSpinner from '../../../hoc/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
        state = {
            isLoading: true
        }
    
    unsubscibeFromSnapshot = null;
   
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapshot => {
            const collectionMap =  convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({
                isLoading:false
            })
        })

        
    }
    render() {
        const { match} = this.props
        const { isLoading } =this.state;
        
        return(
            <div className="shop-page">

                <Route exact path={`${match.path}`} render={(props)=>(
                    <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>
                )}/>
                <Route path={`${match.path}/:collectionId`} render={(props)=>(
                    console.log(props),
                    <CollectionPageWithSpinner isLoading={isLoading} {...props}/>
                )}/>



            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);
import React from 'react';
// CSS
import './collections-overview.styles.scss';
// Components
import PreviewCollection from '../preview-collections/preview-collection.component'
// Redux and Reselect
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPrievew } from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({shop}) => (
    <div className="collections-overview">
                    {
               shop.map(({id, ...otherCollectionProps})=>(
                    <PreviewCollection key={id}{...otherCollectionProps} />
                ))
            }
    </div>
)

const mapStateToProps = createStructuredSelector({
    shop:selectCollectionForPrievew
})

export default connect(mapStateToProps)(CollectionsOverview);
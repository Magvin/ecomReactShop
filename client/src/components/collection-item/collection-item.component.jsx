import React from 'react';
// Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

import CustomButton from '../reusable-components/button/custom-button';
//CSS
import './collection-item.styles.scss';

const CollectionItem = ({item,addItem}) => (
    <div className="collection-item">
        <div className="image"
          style={{
            backgroundImage:`url(${item.imageUrl})`
        }}>
           
        </div>
        <div className="collection-footer">
             <span className="name">{ item.name }</span>
             <span className="price">${ item.price }</span>
        </div>
        <CustomButton inverted text={'ADD TO CART '} onClick={()=>addItem(item)}/> 
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);
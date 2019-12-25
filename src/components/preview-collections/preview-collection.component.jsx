import React from 'react';
// Components
import CollectionItem from '../collection-item/collection-item.component';
// CSS
import './preview-collection.styles.scss';

import { withRouter } from 'react-router-dom';

const PreviewCollection = ({title, items, history, match, routeName }) => (
    
    <div className="collection-preview">
        <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</h1>
        <div className="preview">

            {
                items.filter((item,index)=> index < 4).map((item)=>(
                    <CollectionItem key={item.id} item={item}  />
                ))
            }
        </div>

    </div>
)

export default withRouter(PreviewCollection);
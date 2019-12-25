import React from "react";
import CollectionItem from "../../collection-item/collection-item.component";
import "./collection.styles.scss";

// Redux
import { connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/shop.selectors";

const mapStateProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

const CollectionPage = ({collection}) => {
  const { title, items } = collection[0];
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};



export default connect(mapStateProps)(CollectionPage);

import React from "react";

import "./CollectionItem.scss";
import { IItem } from "../../shared/models/collection";

const CollectionItem: React.FC<IItem> = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
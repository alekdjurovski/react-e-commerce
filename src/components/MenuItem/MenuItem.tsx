import React from "react";
import "./MenuItem.scss";

const MenuItem = ({item} : { item:any}) => {
  return (
    <div className={`${item.size} menu-item`}>
      <div style={{backgroundImage: `url(${item.imageUrl})`}} className='bg-image'>

      </div>
      <div className="content">
        <h1 className="title">{item.title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>

  );
};

export default MenuItem;

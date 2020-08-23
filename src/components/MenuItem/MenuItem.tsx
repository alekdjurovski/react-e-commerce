import React from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import "./MenuItem.scss";
import { ICategories } from "../../shared/models/categories";


  const MenuItem: React.FC<ICategories & RouteComponentProps> = ({title, imageUrl, id, size, linkUrl, history}) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
      <div style={{backgroundImage: `url(${imageUrl})`}} className='bg-image'>

      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>

  );
};

export default withRouter(MenuItem);

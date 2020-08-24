import React from 'react';

import './Collection.scss';

import CollectionItem from '../CollectionItem/CollectionItem';
import { IItem, ICollection } from '../../shared/models/collection';

const Collection: React.FC<ICollection> = ({id, title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
        {
            items
            .filter((item: IItem, idx: number) => idx < 4)
            .map(({...item}) => (
                <CollectionItem key={item.name} {...item}></CollectionItem>
            ))
        }
        

        </div>
    </div>
);

export default Collection;
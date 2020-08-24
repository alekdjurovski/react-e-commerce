import React from 'react';
import SHOP_DATA from '../../shared/data-mock/shop.data';
import Collection from '../../components/Collection/Collection';
import { ICollection } from '../../shared/models/collection';


class ShopPage extends React.Component<ICollection, any> {
    constructor(props:ICollection){
        super(props);

        this.state = {
            collections: SHOP_DATA

        }
    }

    render() {
        const  {collections} = this.state;
        return(
            <div className='shop-page'>
             {
                 collections.map((collection:ICollection) => (
                    <Collection key={collection.id} {...collection}></Collection>
                ))
             }

            </div>
        )
    }


}

export default ShopPage;
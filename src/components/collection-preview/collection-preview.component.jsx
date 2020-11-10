import React from 'react';

import '../../components/collection-item/collection-item.component';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection-preview.style.scss';

const CollectionPreview = ({title, items}) =>(
    <div className='collection-preview'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            { items
               .filter((item, idx) => idx < 4)
               .map(item => (
                 <CollectionItem key={item.id} item={item}></CollectionItem>
               ))
               }
        </div>
    </div>
);

export default CollectionPreview;
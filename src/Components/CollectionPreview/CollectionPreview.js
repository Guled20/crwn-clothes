import React from 'react';
import './collectionpreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviweCollection = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            const { id } = item;

            return <CollectionItem key={id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default PreviweCollection;

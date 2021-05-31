import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './CollectionOverview.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map((collection) => {
        return <CollectionPreview key={collection.id} {...collection} />;
      })}
    </div>
  );
};

const mapStateTOProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateTOProps, null)(CollectionOverview);

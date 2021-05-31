import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import './shopPage.scss';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
  return (
    <div className='shop-item'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

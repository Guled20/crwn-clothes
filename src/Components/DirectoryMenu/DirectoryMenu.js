import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem';
import './directormenu.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';

const DirectoryMenu = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map((section) => {
        return <MenuItem key={section.id} {...section} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, null)(DirectoryMenu);

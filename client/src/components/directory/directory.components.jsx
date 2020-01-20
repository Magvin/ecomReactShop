import React from 'react';

// Redux 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// CSS
import './directory.styles.scss';

// Components
import MenuItem from '../menu-item/menu-item.components';




const Directory = ({ sections }) => {

  return (
    <div className="directory-menu" >
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem
          key={id}
          {...otherSectionProps}
        />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);

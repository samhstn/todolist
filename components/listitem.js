import React, { PropTypes } from 'react'

const ListItem = ({ text }) => {
  <li>{text}</li>
}

ListItem.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default ListItem;

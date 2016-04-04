import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/listitem';

let List = ({ text }) => {
  <div>
    <h1>{text}</h1>
  </div>
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}

List = connect(mapStateToProps)(List)

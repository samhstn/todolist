import React, { Component } from 'react';
import { connect } from 'react-redux';

let Form = ({ dispatch }) => {
  <div>
    <form onSubmit={e => {
      e.preventDefault();
      if(!input.value.trim()){
        return
      }
      dipatch(addToList(input.value.trim()));
      imput.value = '';
    }}>
      <input ref={node => {
        let input = node
      }} />
      <button>Add Todo</button>
    </form>
  </div>
}

Form = connect()(Form);

export default Form;

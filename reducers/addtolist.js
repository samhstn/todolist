const addtolist = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_LIST':
      return [
        ...state,
        {text: action.text}
      ]
    default:
      return state
  }
}

export default addtolist;

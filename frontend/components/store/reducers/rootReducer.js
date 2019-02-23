import * as actions from 'store/actions/sortActions';
import sortHelper from 'utilities/sortHelper';
import rows from 'Mockup/people.js'

console.log(rows);

const initalState = {
  rows,
  sorts: {}
}

function setSortOrder(sorts, column) {
  if (!sorts[column]) {
    sorts[column] = 'asc';
    return {...sorts}
  }

  sorts[column] = (sorts[column] === 'asc') ? 'desc' : 'asc';
  return {...sorts};
}

function getSortOrder(sorts, column) {
  return (sorts[column] === 'desc') ? `-${column}` : column;
}

export default function rootReducer(state = initalState, action) {  
  switch (action.type) {
    case actions.SORT_COLUMN:
      state.sorts = setSortOrder(state.sorts, action.columnSortInfo);      
      state.rows = sortHelper(state.rows, getSortOrder(state.sorts, action.columnSortInfo));
    default:
      state = state;
  }
  console.log('rowsReducer.js: rowsReducer called => ', 'finalStoreState=', state, 'action=', action);
  return {...state};
}
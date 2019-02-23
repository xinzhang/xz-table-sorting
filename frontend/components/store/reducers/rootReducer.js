import * as actions from 'store/actions/sortActions';
import sortHelper from 'utilities/sortHelper';
import rows from 'Mockup/people.js'

function setSortOrder(sorts, column) {
  const found = sorts.find( x=> x.name === column);
  console.log(sorts, column, found);

  if (!found) {
    // first time, make this primary.
    sorts.unshift( {name: column, order: 'asc' });

  } else if (found.order === 'asc') {
    // click from the asc, goes to desc
    found.order = 'desc'
  } else if (found.order === 'desc') {
    // the column should be removed.
    sorts = [...sorts.filter(item => item !== found)];
  }
}

function getSortOrder(sorts) {

  const ordersequence = sorts.map( sort => {
    return (sort.order === 'desc') ? `-${sort.name}` : sort.name;
  })

  console.log(ordersequence);
  return ordersequence;
  
}

const initalState = {
  rows: sortHelper(rows, 'name'),
  sorts: [{name:'name', order: 'asc'}],
}

export default function rootReducer(state = initalState, action) {  
  switch (action.type) {
    case actions.SORT_COLUMN:
      setSortOrder(state.sorts, action.columnSortInfo);      
      state.rows = sortHelper(state.rows, ...getSortOrder(state.sorts));
    default:
      state = state;
  }
  console.log('rootReducer.js: rootReducer called => ', 'store state=', state, 'action=', action);
  return {...state};
}
import * as actions from 'store/actions/sortActions';
import sortHelper from 'utilities/sortHelper';
import rows from 'Mockup/people.js'

function setSortOrder(sorts, column) {
  const idx = sorts.findIndex(x => x.name === column);
  const found = sorts[idx];

  if (idx === -1) {
    // first time, make this primary.
    return [ {name: column, order: 'asc' }, ...sorts ];
    
  } else if (found.order === 'asc') {
    // click from the asc, goes to desc
    return [...sorts.slice(0, idx), 
      { name:column, order: 'desc'}, 
      ...sorts.slice(idx + 1)];

  } else if (found.order === 'desc') {
    // the column should be removed.
    return [...sorts.slice(0, idx),       
      ...sorts.slice(idx + 1)];
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
      const sortorders = setSortOrder([...state.sorts], action.columnSortInfo);

      return {
        rows: sortHelper([...state.rows], ...getSortOrder),
        sorts: [...sortorders]
      }

    default:
      return state;
  }
}
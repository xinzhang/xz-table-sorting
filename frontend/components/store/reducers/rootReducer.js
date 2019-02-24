import * as actions from 'store/actions/sortActions';
import sortHelper from 'utilities/sortHelper';
import rows from 'Mockup/people.js'

//use addOrderType to decide how to make the sorts order
// for single mouse click, addOrderType = 1,  make the order column primary
// for keyboard selection mouse click, addOrderType = 2, make the order added in sequence.
function setSortOrder(sorts, column, addOrderType = 1) {
  const idx = sorts.findIndex(x => x.name === column);
  const found = sorts[idx];

  if (idx === -1 && addOrderType === 1) {
    // first time, make this primary.
    return [ {name: column, order: 'asc' }, ...sorts ];

  } else if (idx === -1 && addOrderType === 2) {
      // first time, make this primary.
      return [...sorts, {name: column, order: 'asc' } ];

  } else if (found.order === 'asc') {
    // click from the asc, goes to desc
    return [...sorts.slice(0, idx), 
      { name:column, order: 'desc'}, 
      ...sorts.slice(idx + 1)];

  } else if (found.order === 'desc') {
    // the column should be removed.
    return [...sorts.slice(0, idx),       
      ...sorts.slice(idx + 1)];
  } else {
    return sorts;
  }
}

function getSortOrder(sorts) {

  const ordersequence = sorts.map( sort => {
    return (sort.order === 'desc') ? `-${sort.name}` : sort.name;
  })

  return ordersequence; 
}

//the order ordinal status will be start, inprogress, stop, default stop
const initalState = {
  rows: sortHelper(rows, 'name'),
  sorts: [{name:'name', order: 'asc'}],
  order_ordinal_status: 'stop',
}

export default function rootReducer(state = initalState, action) { 
  switch (action.type) {
    case actions.SORT_COLUMN:
      const sortorders = setSortOrder([...state.sorts], action.columnSortInfo);

      return {
        rows: sortHelper([...state.rows], ...(getSortOrder(sortorders))),
        sorts: [...sortorders]
      }

    case actions.ORDER_SORT_COLUMN:
      let newState = {
        rows: state.rows,  
        order_ordinal_status: 'inprogress',
      }
      // only when it is starting, we add the sorts order
      // the sorts will happen in the stop order ordinal action in one go.
      if (state.order_ordinal_status === 'start') {                
        newState.sorts = setSortOrder([], action.columnSortInfo, 2);
      } else {
        newState.sorts = setSortOrder(state.sorts, action.columnSortInfo, 2);
      }
      return newState;

    case actions.START_ORDER_ORDINAL:
      return {
        ...state,
        order_ordinal_status: action.order_ordinal_status,
      }
    case actions.STOP_ORDER_ORDINAL:
      return {        
        rows: sortHelper([...state.rows], ...getSortOrder),
        sorts: state.sorts,
        order_ordinal_status: 'stop'
      }

    default:
      return state;
  }
}
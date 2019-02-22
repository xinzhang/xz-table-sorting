import * as actions from 'store/actions/sortActions';
import sortHelper from 'utilities/sortHelper';

const initalState = [
    {id: 100, name: 'John', tools: {hammer: true}, country: 'fi'},
    {id: 101, name: 'Xin', tools: {hammer: false}, country: 'dk'},
    {id: 102, name: 'Ab', tools: {hammer: false}, country: 'dk'},
    {id: 103, name: 'Smith', tools: {hammer: false}, country: 'dk'},
    {id: 104, name: 'Tala', tools: {hammer: false}, country: 'dk'},
    {id: 105, name: 'Dunton', tools: {hammer: false}, country: 'dk'}
];


export default function rowsReducer(state = initalState, action){
  switch(action.type) {
    case actions.SORT_COLUMN:
      return sortHelper(state, action.columnSortInfo);
    default:
      return state;
  }
}
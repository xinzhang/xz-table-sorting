export const SORT_COLUMN = 'SORT_COLUMN';
export const START_ORDER_ORDINAL = 'START_ORDER_ORDINAL';
export const STOP_ORDER_ORDINAL = 'STOP_ORDER_ORDINAL';
export const ORDER_SORT_COLUMN = 'ORDER_SORT_COLUMN';
export const PEOPLE_DATA_UPDATED = 'PEOPLE_DATA_UPDATED';

/**
 * Keeps track of ads that have already been rendered
 * @param {string} adId
 */
export const sortColumn = columnSortInfo => ({
  type: SORT_COLUMN,
  columnSortInfo,
});

export const orderSortColumn = columnSortInfo => ({
  type: ORDER_SORT_COLUMN,
  columnSortInfo,
})

export const startOrderOrdinal = () => ({
  type: START_ORDER_ORDINAL,
  order_ordinal_status : 'start',
})

export const stopOrderOrdinal = () => ({
  type: START_ORDER_ORDINAL,
  order_ordinal_status : 'stop',
})

export const updateRows = (rows) => ({
  type: PEOPLE_DATA_UPDATED, 
  rows,
})
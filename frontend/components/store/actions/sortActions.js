export const SORT_COLUMN = 'SORT_COLUMN';

/**
 * Keeps track of ads that have already been rendered
 * @param {string} adId
 */
export const sortColumn = columnSortInfo => ({
  type: SORT_COLUMN,
  columnSortInfo,
});


export function sortBy(sortType) {
  return {
    type: 'SORT_BY',
    payload: sortType,
  };
};

export function toggleSortDropdown() {
  return {
    type: 'TOGGLE_SORT_DROPDOWN',
    payload: null,
  };
};
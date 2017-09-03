export function addFilter() {
  return {
    type: 'ADD_FILTER',
    payload: null,
  };
}

export function removeFilter(filterType, filterText) {
  return {
    type: 'REMOVE_FILTER',
    payload: { type: filterType, text: filterText },
  };
}

export function toggleFilterDropdown() {
  return {
    type: 'TOGGLE_FILTER_DROPDOWN',
    payload: null,
  };
}

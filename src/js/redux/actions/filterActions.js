export function addFilter(filterType, filterText, filterID) {
  return {
    type: 'ADD_FILTER',
    payload: { type: filterType, text: filterText, id: filterID },
  };
};

export function removeFilter(filterID) {
  return {
    type: 'REMOVE_FILTER',
    payload: { id: filterID },
  };
};

export function toggleFilterDropdown() {
  return {
    type: 'TOGGLE_FILTER_DROPDOWN',
    payload: null,
  };
};
const initial = {
  filterDropdown: false,
  sortDropdown: false,
  filters: [],
  sort: 0,  // 0 == alphabetical, 1 == distance, 2 == date
  artists: [],
  cities: [],
  shows: []
};

export default function reduce(state=initial, action) {
  switch (action.type) {
  case 'TOGGLE_SORT_DROPDOWN':
    return {
      ...state,
      sortDropdown: !(state.sortDropdown),
    }
  case 'TOGGLE_FILTER_DROPDOWN':
    return {
      ...state,
      filterDropdown: !(state.filterDropdown),
    }
  case 'ADD_FILTER':
    return {
      ...state,
      filters: [...state.filters, action.payload],
    };
  case 'REMOVE_FILTER':
    return {
      ...state,
      filters: state.filters.filter((filter) => {
        filter !== action.payload;
      }),
    };
  case 'SORT_BY':
    return {
      ...state,
      sort: action.payload,
    };

  case 'ADD_ARTIST':
    return {
      ...state,
      artists: [...state.artists, action.payload.artist],
    };

  case 'ADD_CITY':
    return {
      ...state,
      cities: [...state.cities, action.payload.city],
    };

  case 'ADD_SHOW':
    return {
      ...state,
      shows: [...state.shows, action.payload.show],
    };
  }

  return state;
}

const initial = {
  filterDropdown: false,
  sortDropdown: false,
  filters: [],
  sort: 0,  // 0 == alphabetical, 1 == distance, 2 == date
  artists: [],
  cities: [],
  shows: [
    {
      artist: 'Vomit Salt',
      city: 'Rochester, NY',
      venue: 'Biege Prison',
      date: '4/11/18',
    },
    {
      artist: 'Bloat Hand',
      city: 'Some Field, NY',
      venue: 'The Bug Jar',
      date: '4/13/18',
    },
  ],
};

export default function reduce(state=initial, action) {
  switch (action.type) {
  case 'TOGGLE_SORT_DROPDOWN':
    return {
      ...state,
      sortDropdown: !(state.sortDropdown),
      filterDropdown: false,
    };
  case 'TOGGLE_FILTER_DROPDOWN':
    return {
      ...state,
      sortDropdown: false,
      filterDropdown: !(state.filterDropdown),
    };
  case 'ADD_FILTER':
    return {
      ...state,
      filters: [...state.filters, action.payload],
    };
  case 'REMOVE_FILTER':
    return {
      ...state,
      filters: state.filters.filter((filter) => {
        return filter.id !== action.payload.id;
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

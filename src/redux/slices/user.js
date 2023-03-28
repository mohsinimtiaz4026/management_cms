import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {apiCallBegan} from '../api';

// ----------------------------------------------------------------------

const initialState = {
  list: {},
  single: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    stopLoading(state) {
      state.isLoading = false;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    userAdded: (state, action) => {
      const {id} = action.payload;
      state.list[id] = action.payload;
    },

    userFetched: (state, action) => {
      state.single = action.payload;
    },

    usersFetched: (state, action) => {
      updatedList = {};
      for (let i in action.payload) {
        const {id} = action.payload[i];
        updatedList[id] = action.payload[i];
      }
      state.list = updatedList;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  startLoading,
  stopLoading,
  hasError,
  userAdded,
  userFetched,
  usersFetched,
} = slice.actions;

// Action Creators
export const addTruck = (truck) =>
  apiCallBegan({
    url: '/trucks',
    method: 'post',
    data: truck,
    onSuccess: userAdded,
  });

export const fetchTruck = (id) =>
  apiCallBegan({
    url: `/trucks/${id}`,
    method: 'get',
    onStart: startLoading,
    beforeSuccess: stopLoading,
    onSuccess: userFetched,
    beforeFailure: hasError,
  });

export const fetchTrucks = () =>
  apiCallBegan({
    url: '/trucks',
    method: 'get',
    onStart: startLoading,
    beforeSuccess: stopLoading,
    onSuccess: usersFetched,
    beforeFailure: hasError,
  });

// Selectors
export const getTrucks = createSelector(
  (state) => {
    return state.trucks.list;
  },
  (list) => Object.values(list)
);

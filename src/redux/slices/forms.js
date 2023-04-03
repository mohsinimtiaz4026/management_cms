import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";

// ----------------------------------------------------------------------

const initialState = {
  formEnableFields: {
    register: {
      fullname: true,
      phone: true,
      email: false,
      gender: false,
      martialStatus: false,
      dateOfBirth: false,
      bloodGroup: false,
      cnic: false,
      religion: false,
      profession: false,
      file: false,
    },
  },
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "forms",
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
    setFormFields(state, action) {
      const { ref, fields } = action.payload;
      state.formEnableFields[ref] = fields;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const actions = slice.actions;

// Action Creators
export const addTruck = (truck) =>
  apiCallBegan({
    url: "/trucks",
    method: "post",
    data: truck,
    onSuccess: userAdded,
  });

export const fetchTruck = (id) =>
  apiCallBegan({
    url: `/trucks/${id}`,
    method: "get",
    onStart: startLoading,
    beforeSuccess: stopLoading,
    onSuccess: userFetched,
    beforeFailure: hasError,
  });

export const fetchTrucks = () =>
  apiCallBegan({
    url: "/trucks",
    method: "get",
    onStart: startLoading,
    beforeSuccess: stopLoading,
    onSuccess: usersFetched,
    beforeFailure: hasError,
  });

export const setFormFields =
  ({ ref, fields }) =>
  (dispatch, getState) => {
    dispatch(actions.setFormFields({ref, fields}))
  };

// Selectors
export const getFormFields = (state) => state.forms.formEnableFields;

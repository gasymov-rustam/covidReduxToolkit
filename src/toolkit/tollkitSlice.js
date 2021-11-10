import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCovid = createAsyncThunk(
  "toolkit/fetchCovid",
  async function (_, { rejectWithValue }) {
    try {
      const currentDate = new Date().toJSON().split("T")[0];
      const response = await fetch(`https://api-covid19.rnbo.gov.ua1/data?to=${currentDate}`);
      if (!response.ok) {
        throw new Error(`Server wasnt found waith status ===>>>> ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
}

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    lang: "en",
    searchQuery: "",
    covid: {},
    currentRegion: "world",
    sortParams: {
      key: "confirmed",
      order: -1,
    },
    status: null,
    error: null,
  },
  reducers: {
    changeLang(state, { payload }) {
      state.lang = payload;
    },
    changeSearchQuery(state, { payload }) {
      state.searchQuery = payload;
    },
    changeSearchParams(state, { payload }) {
      state.sortParams = payload;
    },
    changeSortParams(state, { payload }) {
      state.sortParams = payload;
    },
    changeCurrentRegion(state, { payload }) {
      state.currentRegion = payload;
    },
  },
  extraReducers: {
    [fetchCovid.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCovid.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.covid = action.payload;
    },
    [fetchCovid.rejected]: setError,
  },
});
export const { changeLang, changeSearchQuery, changeCurrentRegion, changeSortParams } =
  toolkitSlice.actions;
export const toolkitState = (state) => state.toolkit;
export default toolkitSlice.reducer;

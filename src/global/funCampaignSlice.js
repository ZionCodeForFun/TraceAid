import { createSlice } from "@reduxjs/toolkit";

const campaignSlice = createSlice({
  name: "campaigns",
  initialState: {
    all: [],
    active: [],
    pending: [],
    completed: [],
    counts: {},
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCampaigns: (state, action) => {
      const data = action.payload;
      state.all = data.all;
      state.active = data.active;
      state.pending = data.pending;
      state.completed = data.completed;
      state.counts = data.counts;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setCampaigns, setError } = campaignSlice.actions;
export default campaignSlice.reducer;

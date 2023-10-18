import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: 'likeslice',
  initialState: {
    list:JSON.parse(localStorage.getItem('likeProducts')) || []
  },
  reducers: {
    addlike: (state, action) => {
      const likeadd = action.payload;
      const likeexists = state.list.find(item => item.id === likeadd.id);

      if (!likeexists) {
        state.list.push(likeadd);
      }
      localStorage.setItem('likeProducts', JSON.stringify(state.list));
    }
  }
});

export const { addlike } = likeSlice.actions;
export default likeSlice.reducer;

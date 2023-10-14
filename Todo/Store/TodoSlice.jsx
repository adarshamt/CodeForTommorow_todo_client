
import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  todos:[]
  
 
  
};
const E4U_slice = createSlice({
  name: "E4U_slice",
  initialState: initial_state,
  reducers: {
    add_todo: (state, action) => {
      const content = action.payload.content;
      state.todos.push(content);
    }

   
   
  
  },
});

export const {
 todo
} = E4U_slice.actions;
export default E4U_slice.reducer;

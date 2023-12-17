import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    arrUser:[],
    showError:''
}

const ReducerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser:(state,action) =>{
        state.arrUser.push(action.payload)
    },

    removeUser: (state,action) =>{
        state.arrUser.splice(state.arrUser.findIndex((item,index) => item.maNguoiDung == action.payload),1)
    },

    updateUser:(state,action) =>{
        console.log(state)
        console.log(action);
        const id = state.arrUser.findIndex((item,index) => item.maNguoiDung == action.payload.maNguoiDung)
        if(id != -1){
            state.arrUser[id] = action.payload
        }
        
    }
  }
});

export const {addUser,removeUser,updateUser} = ReducerSlice.actions

export default ReducerSlice.reducer
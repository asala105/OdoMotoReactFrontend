import { createSlice } from "@reduxjs/toolkit";

export interface RegOrg {
    RegOrgVals?: {
        orgId?: number|null,
        depId?: number|null
    }
}

const initialState: RegOrg = {
    RegOrgVals: null
}

const orgSlice = createSlice({
    name: "org",
    initialState,
    reducers: { 
        addOrg(state, action) {
            console.log('adding org object  ', action.payload)
            return action.payload;
        },
        deleteOrg() {
            return initialState;
        },
        updateOrg(state, action){
            state.RegOrgVals = action.payload.RegOrgVals
        },
    },
});

export const { addOrg, deleteOrg, updateOrg } = orgSlice.actions
export default orgSlice.reducer
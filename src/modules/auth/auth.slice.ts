import { createSlice } from "@reduxjs/toolkit"
import { authReducers } from "@/modules/auth/auth.reducers"
import { initialState } from "@/modules/auth/auth.state"

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: authReducers,
})

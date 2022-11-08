import { combineReducers } from "redux"
import { AnyAction } from "@reduxjs/toolkit"
import { authSlice } from "@/modules/auth/auth.slice"
import { AuthCallTypes } from "@/modules/auth/auth.call-types"

export const appReducers = combineReducers({
	[authSlice.name]: authSlice.reducer,
})

export const rootReducer = (state: any, action: AnyAction) => {
	if (action?.payload?.callType === AuthCallTypes.SIGN_OUT) {
		return appReducers(undefined, action)
	}

	return appReducers(state, action)
}

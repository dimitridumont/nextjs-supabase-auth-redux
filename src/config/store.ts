import {
	AnyAction,
	configureStore,
	ThunkAction,
	ThunkDispatch,
} from "@reduxjs/toolkit"
import { rootReducer } from "@/config/reducers"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { appOutputs } from "@/config/app-outputs"

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware: any) => [
		...getDefaultMiddleware({
			serializableCheck: {
				isSerializable: () => true,
			},
			thunk: { extraArgument: appOutputs },
		}),
	],
	devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AnyAction
>
export const useAppDispatch = () => useDispatch<TypedDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

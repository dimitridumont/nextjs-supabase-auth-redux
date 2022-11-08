import { AuthOutput, SignInDto, SignUpDto } from "@/modules/auth/auth.output"
import { Session } from "@/types/user"
import { CustomError } from "@/types/error"
import { authSlice } from "@/modules/auth/auth.slice"
import { AuthCallTypes } from "@/modules/auth/auth.call-types"

const { actions } = authSlice

export const signIn =
	(signInDto: SignInDto) =>
	async (
		dispatch: any,
		_: any,
		{ authOutput }: { authOutput: AuthOutput }
	) => {
		dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_IN }))

		const signInRo: { session: Session | null; error: CustomError | null } =
			await authOutput.signIn(signInDto)

		dispatch(actions.signIn(signInRo))
	}

export const signUp =
	(signUpDto: SignUpDto) =>
	async (
		dispatch: any,
		_: any,
		{ authOutput }: { authOutput: AuthOutput }
	) => {
		dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_UP }))

		const signUpRo: { error: CustomError | null } = await authOutput.signUp(
			signUpDto
		)

		dispatch(actions.signUp(signUpRo))
	}

export const signOut =
	() =>
	async (
		dispatch: any,
		_: any,
		{ authOutput }: { authOutput: AuthOutput }
	) => {
		dispatch(actions.startCall({ callType: AuthCallTypes.SIGN_OUT }))

		const signOutRo: { error: CustomError | null } =
			await authOutput.signOut()

		dispatch(actions.signOut(signOutRo))
	}

export const setSessionFromLocalSessionData =
	(localSessionData: Session) => async (dispatch: any) => {
		dispatch(actions.setLoggedInUserWithLocalData({ localSessionData }))
	}

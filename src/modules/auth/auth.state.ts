import { CustomError } from "@/types/error"
import { Session } from "@/types/user"
import { RequestStatus } from "@/types/request-status"

export interface AuthState {
	session: Session | null
	signInError: CustomError | null
	signInStatus: RequestStatus
	signUpError: CustomError | null
	signUpStatus: RequestStatus
	signOutError: CustomError | null
	signOutStatus: RequestStatus
}

export const initialState: AuthState = {
	session: null,
	signInError: null,
	signInStatus: RequestStatus.IDLE,
	signUpError: null,
	signUpStatus: RequestStatus.IDLE,
	signOutError: null,
	signOutStatus: RequestStatus.IDLE,
}

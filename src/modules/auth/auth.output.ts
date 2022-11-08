import { Session } from "@/types/user"
import { CustomError } from "@/types/error"

export type SignInDto = {
	email: string
	password: string
}

export type SignUpDto = {
	email: string
	password: string
}

export interface AuthOutput {
	signIn(
		signInDto: SignInDto
	): Promise<{ session: Session | null; error: CustomError | null }>

	signUp(signUpDto: SignUpDto): Promise<{ error: CustomError | null }>

	signOut(): Promise<{ error: CustomError | null }>
}

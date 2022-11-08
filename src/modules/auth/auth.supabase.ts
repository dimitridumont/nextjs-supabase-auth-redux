import { AuthOutput, SignInDto, SignUpDto } from "@/modules/auth/auth.output"
import { Session } from "@/types/user"
import { CustomError } from "@/types/error"
import { supabase } from "@/config/supabase"

export class AuthSupabase implements AuthOutput {
	async signIn({ email, password }: SignInDto): Promise<{
		session: Session | null
		error: CustomError | null
	}> {
		const {
			data: { session },
			error,
		} = await supabase.auth.signInWithPassword({
			email,
			password,
		})

		return Promise.resolve({ session, error })
	}

	async signUp({
		email,
		password,
	}: SignUpDto): Promise<{ error: CustomError | null }> {
		const { error } = await supabase.auth.signUp({
			email,
			password,
		})

		return Promise.resolve({ error })
	}

	async signOut(): Promise<{ error: CustomError | null }> {
		const { error } = await supabase.auth.signOut()

		return Promise.resolve({ error })
	}
}

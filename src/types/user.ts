export type User = {
	id: string
	// @TODO: you can add supabase others User fields
}

export type Session = {
	access_token: string
	token_type: string
	expires_in: number
	refresh_token: string
	user: User
	expires_at?: number
}

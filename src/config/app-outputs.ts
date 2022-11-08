import { AuthOutput } from "@/modules/auth/auth.output"
import { AuthSupabase } from "@/modules/auth/auth.supabase"

export type AppOutputs = {
	authOutput: AuthOutput
}

export const appOutputs: AppOutputs = {
	authOutput: new AuthSupabase(),
}

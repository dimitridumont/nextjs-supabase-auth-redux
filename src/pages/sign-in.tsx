import type { NextPage } from "next"
import { Head } from "@/components/seo/head"
import { SignIn } from "@/components/pages/sign-in"

const SignInPage: NextPage = () => {
	return (
		<>
			<Head />

			<SignIn />
		</>
	)
}

export default SignInPage

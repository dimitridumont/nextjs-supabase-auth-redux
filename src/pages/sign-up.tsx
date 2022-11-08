import type { NextPage } from "next"
import { Head } from "@/components/seo/head"
import { SignUp } from "@/components/pages/sign-up"

const SignUpPage: NextPage = () => {
	return (
		<>
			<Head />

			<SignUp />
		</>
	)
}

export default SignUpPage

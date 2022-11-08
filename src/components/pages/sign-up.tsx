import type { NextPage } from "next"
import { Head } from "@/components/seo/head"
import { RequestStatus } from "@/types/request-status"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/config/store"
import { signUp } from "@/modules/auth/auth.actions"
import { CustomError } from "@/types/error"
import {
	selectSignUpError,
	selectSignUpStatus,
} from "@/modules/auth/auth.selectors"

export const SignUp: NextPage = () => {
	const dispatch = useAppDispatch()

	const signUpError: CustomError | null = useAppSelector(selectSignUpError)
	const signUpStatus: RequestStatus = useAppSelector(selectSignUpStatus)

	const onSignUp = async (event: any) => {
		event.preventDefault()

		const formData = new FormData(event.target)
		const formEntries = Object.fromEntries(formData)
		const email: string = formEntries.email as string
		const password: string = formEntries.password as string

		await dispatch(signUp({ email, password }))
	}

	return (
		<div>
			<main className="w-[90%] lg:w-96 mx-auto mt-10">
				<h1 className="text-3xl font-bold text-center mb-10">
					Create an account
				</h1>

				<form className="flex flex-col gap-4" onSubmit={onSignUp}>
					<input
						name="email"
						type="email"
						required
						className="block px-4 py-1.5 w-full border rounded"
						placeholder="Email"
					/>

					<input
						name="password"
						type="password"
						minLength={6}
						required
						className="block px-4 py-1.5 w-full border rounded"
						placeholder="Password"
					/>

					<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full">
						{signUpStatus === RequestStatus.LOADING
							? "Loading ..."
							: "Sign up"}
					</button>

					<div className="text-center">
						Already have an account ?{" "}
						<Link href="/sign-in" className="underline">
							Login
						</Link>
					</div>
				</form>

				{signUpStatus === RequestStatus.FAILED ? (
					<div className="mt-8 p-2 text-center bg-red-100 text-red-600 rounded">
						{signUpError?.message}
					</div>
				) : (
					signUpStatus === RequestStatus.COMPLETED && (
						<div className="mt-8 p-2 text-center bg-green-100 text-green-600 rounded">
							Your registration has been taken into account.
							Please check your emails to validate your account.
						</div>
					)
				)}
			</main>
		</div>
	)
}

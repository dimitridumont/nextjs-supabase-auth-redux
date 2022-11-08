import { useEffect } from "react"
import { Head } from "@/components/seo/head"
import { RequestStatus } from "@/types/request-status"
import Link from "next/link"
import { useRouter } from "next/router"
import { signIn } from "@/modules/auth/auth.actions"
import { useAppDispatch, useAppSelector } from "@/config/store"
import {
	selectIsLoggedInUser,
	selectSignInError,
	selectSignInStatus,
} from "@/modules/auth/auth.selectors"
import { CustomError } from "@/types/error"

export const SignIn = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const isLoggedInUser: boolean = useAppSelector(selectIsLoggedInUser)
	const signInError: CustomError | null = useAppSelector(selectSignInError)
	const signInStatus: RequestStatus = useAppSelector(selectSignInStatus)

	useEffect(() => {
		if (isLoggedInUser) {
			router.push("/")
		}
	}, [isLoggedInUser])

	const onSignIn = async (event: any) => {
		event.preventDefault()

		const formData = new FormData(event.target)
		const formEntries = Object.fromEntries(formData)
		const email: string = formEntries.email as string
		const password: string = formEntries.password as string

		await dispatch(signIn({ email, password }))
	}

	return (
		<div>
			<main className="w-[90%] lg:w-96 mx-auto mt-10">
				<h1 className="text-3xl font-bold text-center mb-10">Login</h1>

				<form className="flex flex-col gap-4" onSubmit={onSignIn}>
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
						{signInStatus === RequestStatus.LOADING
							? "Loading ..."
							: "Sign in"}
					</button>

					<div className="text-center">
						You do not have an account ?{" "}
						<Link href="/sign-up" className="underline">
							Sign up
						</Link>
					</div>
				</form>

				{signInStatus === RequestStatus.FAILED && (
					<div className="mt-8 p-2 text-center bg-red-100 text-red-600 rounded">
						{signInError?.message}
					</div>
				)}
			</main>
		</div>
	)
}

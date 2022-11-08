import { useRouter } from "next/router"
import { useAppDispatch } from "@/config/store"
import { signOut } from "@/modules/auth/auth.actions"

export const Navbar = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const onSignOut = async () => {
		await dispatch(signOut())

		await router.push("/sign-in")
	}

	return (
		<nav className="px-6 py-4 flex justify-between items-center bg-white">
			<div className="flex items-center gap-6">
				<p className="text-xl font-bold">App</p>
			</div>

			<button
				className="px-8 py-2 bg-blue-500 text-white text-sm rounded-full"
				onClick={onSignOut}
			>
				Sign out
			</button>
		</nav>
	)
}

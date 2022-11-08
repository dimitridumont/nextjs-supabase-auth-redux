import { ReactNode, useEffect } from "react"
import { useRouter } from "next/router"
import { Session } from "@/types/user"
import {
	selectIsLoggedInSession,
	selectLocalSessionData,
} from "@/modules/auth/auth.selectors"
import { useAppDispatch, useAppSelector } from "@/config/store"
import { setSessionFromLocalSessionData } from "@/modules/auth/auth.actions"

type SessionProviderProps = {
	children: ReactNode
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const isLoggedInSession: boolean = useAppSelector(selectIsLoggedInSession)

	useEffect(() => {
		if (!isLoggedInSession) getLoggedInUserDataOrRedirectToSignInPage()
	}, [])

	const getLoggedInUserDataOrRedirectToSignInPage = () => {
		const localSessionData: Session | null = selectLocalSessionData()

		if (!localSessionData) {
			router.push("/sign-in")
			return
		}

		dispatch(setSessionFromLocalSessionData(localSessionData))
	}

	return <>{isLoggedInSession ? children : "Loading ..."}</>
}

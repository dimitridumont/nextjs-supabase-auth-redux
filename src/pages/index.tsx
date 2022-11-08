import type { NextPage } from "next"
import { Head } from "@/components/seo/head"
import { SessionProvider } from "@/components/auth/session-provider"
import { Index } from "@/components/pages"

const IndexPage: NextPage = () => {
	return (
		<>
			<Head />

			<SessionProvider>
				<Index />
			</SessionProvider>
		</>
	)
}

export default IndexPage

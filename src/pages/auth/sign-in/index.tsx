import { GuestGuard } from "../../../components/auth/guest-guard"
import { SignInForm } from "../../../components/auth/sign-in-form"
import { Layout } from "./layout"

export const SignIn = () => {
    return (
        <Layout>
            <GuestGuard>
                <SignInForm/>
            </GuestGuard>
        </Layout>
    )
}
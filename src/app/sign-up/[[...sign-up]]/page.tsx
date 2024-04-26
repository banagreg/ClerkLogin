import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
	return (
		<div className="flex items-center justify-center flex-col gap-10">
			<SignUp />
		</div>
	);
}

export default SignUpPage
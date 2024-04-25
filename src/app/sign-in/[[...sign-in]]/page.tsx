import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
	return (
		<div className='flex items-center justify-center flex-col gap-10'>
			<SignIn />
		</div>
	)
}

export default SignInPage
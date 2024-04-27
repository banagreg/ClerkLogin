'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const clearError = () => {
    setError('');
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(clearError, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err: any) {
      setError(err.errors[0].longMessage);
      const error = JSON.stringify(err, null, 2);
      console.error(error);
    }
  };

  const onPressVerify = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): Promise<void> => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== 'complete') {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push('/dashboard');
      }
    } catch (err: any) {
      console.log(err);
      setError(err.errors[0].longMessage);
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div
      className="border p-5 rounded"
      style={{
        width: '500px',
      }}
    >
      {!pendingVerification && (
        <>
          <h1 className="text-2xl mb-4 text-center">
            Do not have an account?<b> Sign up now! 👇</b>{' '}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmailAddress(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                required={true}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <h1 className="text-xs text-center">
              Already a user?{' '}
              <b>
                <Link href="login">Login!</Link>
              </b>{' '}
            </h1>
            <button
              type="submit"
              className="w-full text-white bg-black hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
          </form>
        </>
      )}

      {pendingVerification && (
        <div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <h1 className="text-2xl mb-4">
            <b> Check your email!</b>{' '}
          </h1>
          <form className="space-y-4 md:space-y-6">
            <input
              value={code}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Verification Code..."
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              type="submit"
              onClick={onPressVerify}
              className="w-full text-white bg-black hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Verify Email
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;

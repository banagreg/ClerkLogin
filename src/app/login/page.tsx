'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        router.push('/dashboard');
      } else {
        console.log(result);
      }
    } catch (err: any) {
      setError(err.errors[0].longMessage);
      console.error('error', err.errors[0].longMessage);
    }
  };

  return (
    <div
      className="border p-5 rounded"
      style={{
        width: '500px',
      }}
    >
      <h1 className="text-2xl mb-4 text-center">
        Already an user?<b> Sign in now! 👇</b>{' '}
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
            onChange={(e) => setEmail(e.target.value)}
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
        {error && <p className="text-red-500 text-center">{error}</p>}
        <h1 className="text-xs text-center">
          Do not have an account?{' '}
          <b>
            <Link href="register">Register now!</Link>
          </b>{' '}
        </h1>
        <button
          type="submit"
          className="w-full text-white bg-black hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

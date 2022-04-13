import React, { useEffect, useState } from 'react'
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import Button from '../../shared/standalone/Button'
import Container from '../../shared/standalone/Container'
import Divider from '../../shared/standalone/Divider'
import Input from '../../shared/standalone/Input'
import PageTitle from '../../shared/standalone/PageTitle'

const Login = () => {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [signInWithEmailAndPassword, user, loading, emailError] =
    useSignInWithEmailAndPassword(auth)

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth)
  const from = '/'

  useEffect(() => {
    if (user || googleUser) {
      setEmail('')
      setPassword('')
      setError('')
      navigate(from, { replace: true })
      return
    }
    if (loading || googleLoading) {
      setError('Logging in User...')
      return
    }
    if (emailError) {
      setError(emailError?.message)
      return
    }
    if (googleError) {
      setError(googleError?.message)
      return
    }
  }, [
    user,
    loading,
    emailError,
    googleUser,
    googleLoading,
    googleError,
    from,
    navigate,
  ])

  const handleSignInWithEmailAndPassword = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please fill out every field!')
      return
    }

    signInWithEmailAndPassword(email, password)
  }
  return (
    <Container>
      <form
        className='w-full md:w-[380px] mx-auto border border-gray-700 px-6 py-8'
        onSubmit={handleSignInWithEmailAndPassword}
      >
        <PageTitle title={'Login'} />
        <Input
          id={'email'}
          type='email'
          placeholder='Enter Your Email'
          label='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          id={'password'}
          type='password'
          placeholder='Enter Your Password'
          label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className='text-sm text-red-600 mt-2'>{error}</p>
        <Button type='submit' variant={'filled'} fullWidth>
          Login
        </Button>
        <p className='text-center text-sm md:text-base text-gray-700 mt-4'>
          New to Grand Hotel?
          <span
            onClick={() => navigate('/signup', { replace: true })}
            className='text-orange-400 hover:opacity-75 transition-opacity duration-300 cursor-pointer ml-1 md:ml-2'
          >
            Create an account
          </span>
        </p>
        <Divider />
        <Button onClick={() => signInWithGoogle()} variant='outlined' fullWidth>
          <FcGoogle className='w-5 h-5' />
          Continue With Google
        </Button>
      </form>
    </Container>
  )
}

export default Login

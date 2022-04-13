import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Button from '../shared/standalone/Button'
import Container from '../shared/standalone/Container'
import Divider from '../shared/standalone/Divider'
import Input from '../shared/standalone/Input'
import PageTitle from '../shared/standalone/PageTitle'
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase/firebase.init'

const SignUp = () => {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, user, loading, emailError] =
    useCreateUserWithEmailAndPassword(auth)

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth)
  const [sendEmailVerification] = useSendEmailVerification(auth)
  const [updateProfile] = useUpdateProfile(auth)
  const from = '/'

  useEffect(() => {
    // const verifyEmail = async () => {
    //   await sendEmailVerification()
    // }
    // if (user) {
    //   updateProfile({ displayName: name })
    //   //   verifyEmail()
    //   console.log(user?.user)
    // }
    if (user || googleUser) {
      setEmail('')
      setPassword('')
      setError('user created')
      navigate(from, { replace: true })
      return
    }
    if (loading || googleLoading) {
      setError('Creating User ...')
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
    sendEmailVerification,
    updateProfile,
    name,
  ])

  const handleCreateUserWithEmailAndPassword = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please fill out every field!')
      return
    }

    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(
        email
      )
    ) {
      setError('Please Enter a valid Email Address...')
      return
    }

    if (password.length < 6) {
      setError('Password Length must be atleast 6 Characters long.')
      return
    }

    createUserWithEmailAndPassword(email, password)
  }
  return (
    <Container>
      <form
        className='w-full md:w-[380px] mx-auto border border-gray-700 px-6 py-8'
        onSubmit={handleCreateUserWithEmailAndPassword}
      >
        <PageTitle title={'SignUp'} />
        <Input
          id={'name'}
          type='text'
          placeholder='Enter Your Name'
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          Sign Up
        </Button>
        <p className='text-center text-sm md:text-base text-gray-700 mt-4'>
          Already have an account?
          <span
            onClick={() => navigate('/login', { replace: true })}
            className='text-orange-400 hover:opacity-75 transition-opacity duration-300 cursor-pointer ml-1 md:ml-2'
          >
            Login Here
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

export default SignUp

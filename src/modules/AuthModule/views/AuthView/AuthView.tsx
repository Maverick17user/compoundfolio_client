import { SignIn, SignUp } from '@modules/AuthModule/components';
import React from 'react'

// TODO: Whan user sign in first time, save *hasAccount = true* to the local store.
const hasAccount = false;

export default function AuthView() {
  return hasAccount ? <SignIn /> : <SignUp />
}

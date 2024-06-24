import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

import {recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";

type User = {
  name: string;
  email: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      }).catch(res => {
        destroyCookie(null, 'nextauth.token')
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const request = await signInRequest({
      email,
      password,
    })

    const {access_token, name}:any = request

    setCookie(undefined, 'nextauth.token', access_token)

    api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

    setUser(name)

    Router.push('/home');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
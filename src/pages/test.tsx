import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';
import React from 'react'

export default function Test() {
  return (
    <div>Test</div>
  )
}
export async function getServerSideProps(context:any) {
    const session = await getSession(context);
    const token:any=await getToken(context)
    const isToken=token?.accessToken
    console.log("token",token)  
    console.log("session",session)  

    if (!isToken) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  
    return {
      props: { session },
    };
  }

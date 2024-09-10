import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import React from 'react'

export default function Test() {
  return (
    <div>Test</div>
  )
}
export async function getServerSideProps(context:any) {
    const session = await getSession(context);

    console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);
    console.log("session",session)
  
    if (!session) {
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

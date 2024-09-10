import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import session from 'redux-persist/lib/storage/session';

export default NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('credentials', credentials);
        const formdata = new FormData();
        formdata.append("username", credentials.username);
        formdata.append("password", credentials.password);
        try {
          const res = await fetch('https://nomad-be.onrender.com/auth/token', {
            method: 'POST',
            body: formdata,
          });

          const user = await res.json();
          console.log("API Response:", user);

          // Return the user object if the request was successful
          if (res.ok && user?.access_token) {
            return { token: user.access_token }; 
           }

          // Return null if the credentials are invalid
          return null;
        } catch (error) {
          console.error('Error in authorize:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  secret:process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  callbacks:{
   async jwt({token,user}) {
    console.log("user",user)
    console.log("token",token)
    if(user){
      token.access_token=user.token
    }
    return token
   },
   async session({session,token}) {
    console.log("session token",token)

    session.accessToken=token.access_token
    console.log("session",session)

    return session
   }
  } 
});

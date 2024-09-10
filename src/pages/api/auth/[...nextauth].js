import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

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
          // Return the user object if the request was successful
          if (res.ok && user?.access_token) {
            return user; 
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
  session:{
    jwt:true
  },
  callbacks:{
    async jwt({ token, user }) {
      if(user){
        token.accessToken=user.access_token
      }
      return token 
    },
    async session({ session, token, user }) {

      session.accessToken=token.accessToken
      session.user.id = token.accessToken
      return session
    }
  }



  
 
});

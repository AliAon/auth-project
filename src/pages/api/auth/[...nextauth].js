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
  secret:process.env.NEXTAUTH_SECRET 
});

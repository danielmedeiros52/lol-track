import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginSSO, login } from '@/actions/authentication';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'SignIn',
      credentials: {
        email: {
          label: 'email',
          type: 'email'
        },
        password: { label: 'Password', type: 'password' }
      },
      // eslint-disable-next-line no-unused-vars
      async authorize(credentials, req) {
        const res = await login(credentials)
          .catch((e) => { throw new Error(e) });
        return res;
      }
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async signIn(user) {
      console.log(user)
      if (user.profile) {
        console.log('user.profile', user.profile)
        return await loginSSO(user)
          .catch((e) => { throw new Error(e) });
      }
      return true;
    },
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      if (!token.access) {
        token = await loginSSO({ verifySSOUser: true, email: token.email, socialAccountId: token.id })
      }
      session.user = token as any;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET!
});

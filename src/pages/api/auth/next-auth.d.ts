import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      access: string;
      refresh: string;
      user: {
        id: string;
        email: string;
        user: any
      };
    };
  }
}

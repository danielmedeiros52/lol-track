import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export function withSSRGuest(fn: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx);
    if (session) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      };
    }

    return await fn(ctx);
  };
}

import { signOut } from 'next-auth/react';
import { destroyCookie } from 'nookies';

export function logout() {
  destroyCookie(null, 'accessToken');
  signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/login` });
}

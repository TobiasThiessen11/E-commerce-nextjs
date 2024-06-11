import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdminPage = nextUrl.pathname.startsWith('/admin');
      const isOnLoginPage = nextUrl.pathname === '/login';

      if (isOnAdminPage) {
        if (isLoggedIn) return true;
        return false;
      } else if (isOnLoginPage) {
        if (isLoggedIn) return Response.redirect(new URL('/admin', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

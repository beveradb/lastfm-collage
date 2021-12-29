import NextAuth from 'next-auth';

const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_SHARED_SECRET } = process.env;

export default NextAuth({
  providers: [
    {
      id: 'lastfm',
      name: 'Lastfm',
      version: '1.0',
      type: 'oauth',
      clientId: NEXT_PUBLIC_API_KEY,
      clientSecret: NEXT_PUBLIC_SHARED_SECRET,
      authorization: {
        url: 'https://www.last.fm/api/auth',
        params: {
          api_key: NEXT_PUBLIC_API_KEY,
        },
      },
      profileUrl: 'http://localhost:300/profile',
    },
  ],
  pages: {
    signIn: '/signin',
  },
});

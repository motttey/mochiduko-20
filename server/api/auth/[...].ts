import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
  secret: process.env.NUXT_AUTH_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: '(hint: tagosaku)' },
        password: { label: 'Password', type: 'password', placeholder: '(hint: tagotago)' }
      },
      async authorize (_credentials: any) {
          return { id: '1', name: 'Tagosaku', email: 'motitago@example.com' }
      }
    })
  ]
})

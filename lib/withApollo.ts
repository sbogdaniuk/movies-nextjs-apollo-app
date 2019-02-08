import nextWithApollo from 'next-with-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createPersistedQueryLink } from 'apollo-link-persisted-queries'
import { BatchHttpLink } from 'apollo-link-batch-http'

import { config } from '../config'

const persistedLink = createPersistedQueryLink()
const batchLink = new BatchHttpLink({ uri: config.API_URL })

export const withApollo = nextWithApollo(({ initialState }) => (
  new ApolloClient({
    link: ApolloLink.from([
      persistedLink,
      batchLink,
    ]),
    cache: new InMemoryCache().restore(initialState || {}),
  })
), {
  getDataFromTree: 'always',
})

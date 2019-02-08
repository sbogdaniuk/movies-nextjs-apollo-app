import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'

import { withApollo } from '../lib'

class MyApp extends App<any> {
  render () {
    const { Component, pageProps, apollo } = this.props
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)

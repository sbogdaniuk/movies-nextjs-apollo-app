import * as React from 'react'
import { NextFunctionComponent, NextContext } from 'next'

import { Layout } from '../components'
import { ShowComponent } from '../generated/apolloComponents'

type Props = {
  id: string
}

const Show: NextFunctionComponent<Props> = ({ id }) => {
  return (
    <ShowComponent variables={{ id }}>
      {({ error, data }) => {
        if (error) {
          return (
            <div>
              Error
            </div>
          )
        }
        if (data && data.show) {
          const { show } = data
          return (
            <Layout title={show.name}>
              <h1>{show.name}</h1>
              <p>Genres: {show.genres.join(', ')}</p>
              <img src={show.image.medium as string} alt={`Preview for ${show.name}`} />
              <p>Language: {show.language}</p>
              <div dangerouslySetInnerHTML={{ __html: show.summary as string }} />
              <p>Type: {show.type}</p>
            </Layout>
          )
        }
        return null
      }}
    </ShowComponent>
  )
}

Show.getInitialProps = async ({ query }: NextContext): Promise<Props> => {
  return { id: query.id as string }
}

export default Show

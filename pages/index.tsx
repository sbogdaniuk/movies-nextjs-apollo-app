import React from 'react'

import { Layout } from '../components'
import { Link } from '../server/routes'
import { routes } from '../constants'

const shows = new Array(10).fill(0).map((_, i) => i + 1)

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>hello Next.js 👋</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet dignissimos, dolore ea enim eos esse eum ex laudantium odit optio, placeat porro ratione reiciendis unde vel veniam veritatis voluptatibus!</p>
      <p>!!!NODE_ENV!!!: {String(process.env.NODE_ENV)}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet at blanditiis culpa, cum facere impedit inventore ipsam magnam minima nemo nesciunt odio perspiciatis porro quam quasi quibusdam tempora voluptatem?</p>
      <ul>
        {shows.map(id => (
          <li key={id}>
            <Link route={routes.show} params={{ id }}>
              <a>{`Show ${id}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

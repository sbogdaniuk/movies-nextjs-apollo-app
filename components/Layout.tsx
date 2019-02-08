import * as React from 'react'
import Head from 'next/head'
import {Header} from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
}
type Props = {
    title?: string;
};
export const Layout: React.FunctionComponent<Props> = (props) => {
    const {
        children,
        title = 'Title',
    } = props
    return (
        <div style={layoutStyle}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <Header />
            {children}
        </div>
    )
}

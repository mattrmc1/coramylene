import React, { Component } from 'react';

export default {
  getSiteData: () => ({
    title: 'Cora Mylene',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/home',
        exact: true,
        component: 'src/containers/Home',
      },
      {
        path: '/gallery',
        component: 'src/containers/Gallery',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/store',
        component: 'src/containers/Store',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: class customHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      return (
        <Html lang="en-US" data-reactroot="">
          <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"/>
            <link 
              rel="shortcut icon" 
              type="image/png" 
              href="favicon.ico"
            />

            <title>Cora Mylene</title>

            <link 
              rel="stylesheet" 
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
              crossOrigin="anonymous"
            />
            <link 
              rel="stylesheet" 
              href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
              integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
              crossOrigin="anonymous"
            />
            <script 
              src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
              integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
              crossOrigin="anonymous"
            />
            <script 
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" 
              integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" 
              crossOrigin="anonymous"
            />
            <script 
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" 
              integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" 
              crossOrigin="anonymous"
            />
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
}

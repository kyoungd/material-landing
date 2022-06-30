import React from 'react';
import Layout from '../components/layout/Layout';

const NotFound = ({location}) => (
  <Layout location={location}>
    <h1>Not Found</h1>
    <p>You just hit a page that doesn&#39;t exist...</p>
  </Layout>
);

export default NotFound;

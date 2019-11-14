import Head from 'next/head';
import Navbar from './navbar';
import '../../styles/app.scss';

const Layout = props => (
  <div className="container layout">
    <Head>
      <title>Trip Imagine - Tour and Travel Agency</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
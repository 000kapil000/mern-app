import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Helmet } from 'react-helmet'
// import { Toaste } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import  { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, descripition, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={descripition} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster/>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: "Ecommerce app -- shop now",
  descripition: "mern stack project",
  keywords: 'mern react node mongodb',
  author: "kapil"
}
export default Layout
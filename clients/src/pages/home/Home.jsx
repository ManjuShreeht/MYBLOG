import React from 'react'

import classes from './home.module.css'
import Navbar from '../../components/navbar/Navbar'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import FeaturedBlogs from '../../components/featuredBlog/FeaturedBlogs'
import Newsletter from '../../components/newsletter/Newsletter'
const Home = () => {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import fbImg from '../img/legacy/fb.jpg';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      
      <div class="content">

        <div class="content_resize">
          <div class="mainbar">
            {children}
          </div>

          <div class="sidebar">
            <div class="gadget">
              <h2 class="star">其他連結</h2>
              <ul class="sb_menu">
                {/* <!--<li><a href="http://www.proarchery.com.hk/index.php" target="_blank">Pro Archery Online Shop</a></li>--> */}
                <li><a href="http://www.proarchery.org.hk/" target="_blank">博雅箭會 ProArchery Club</a></li>
                <li>
                  <a href="http://www.facebook.com/proarcheryhk" target="_blank">
                    <img src={fbImg} height="40"/>
                  </a>
                </li>
              </ul>
              <div class="clr"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper

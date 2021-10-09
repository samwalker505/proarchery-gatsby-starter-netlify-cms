import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/legacy/logo.jpeg';
import menuActive from '../img/legacy/menu_a.jpeg';



const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <>
        <div class="header">
          <div class="header_resize">
            <div 
              class="logo"
            >
              <h1><a href="http://www.proarchery.com.hk/index.html">香港射箭服務中心</a></h1>
            </div>
            <div class="menu_nav">
              <ul>
                <li><a href="http://www.proarchery.com.hk/index.html">首頁</a></li>
                <li><a href="http://www.proarchery.com.hk/centre.html">中心資料</a></li>
                <li><a href="http://www.proarchery.com.hk/course.html">射箭課程</a></li>
                <li><a href="http://www.proarchery.com.hk/summer2021.html"><font color="yellow">2021暑期課程</font></a></li>
                {/* <!--<li><a href="mind_course.html">靜觀射箭小組</a></li>-->
                <!--<li><a href="mind_workshop.html">靜觀體驗工作坊</a></li>--> */}
                <li><a href="http://www.proarchery.com.hk/experience.html">我們的經驗</a></li>
                {/* <!--<li><a href="blog.html">教練手記</a></li>--> */}
                <li><a href="http://www.proarchery.com.hk/charge_and_regulation.html">射箭場收費及租用守則</a></li>
                <li><a href="http://www.proarchery.com.hk/carpark.html">停車場收費</a></li>
                <li><a href="http://www.proarchery.com.hk/contactus.html">聯絡我們</a></li>
                {/* <!--<li class="active"><a href="index.php"><font color=yellow>Pro Archery Online Shop</font></a></li>--> */}
                <li><a href="http://www.proarchery.org.hk/" target="_blank"><font color="yellow">博雅箭會</font></a></li>
              </ul>
            </div>
            <div class="clr"></div>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar

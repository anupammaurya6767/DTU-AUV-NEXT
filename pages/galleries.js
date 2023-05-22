import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import GalleryCard2 from '../components/gallery-card2'

const Galleries = (props) => {
  return (
    <>
      <div className="galleries-container">
        <Head>
          <title>Galleries - DTU AUV</title>
          <meta property="og:title" content="Galleries - DTU AUV" />
        </Head>
        <header data-thq="thq-navbar" className="galleries-navbar-interactive">
          <Image
            alt="logo"
            src="/playground_assets/ain-1500h.png"
            loading="lazy"
            className="galleries-logo"
            width={57}
            height={59}
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="galleries-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="galleries-nav"
            >
              <span>About</span>
              <span className="galleries-text01">Features</span>
              <span className="galleries-text02">Pricing</span>
              <span className="galleries-text03">Team</span>
              <select className="galleries-select">
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
            </nav>
          </div>
          <div
            data-thq="thq-navbar-btn-group"
            className="galleries-btn-group"
          ></div>
          <input type="text" placeholder="placeholder" className="input" />
          <button className="galleries-register button">Register</button>
          <div data-thq="thq-burger-menu" className="galleries-burger-menu">
            <svg viewBox="0 0 1024 1024" className="galleries-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="galleries-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="galleries-nav1"
            >
              <div className="galleries-container01">
                <img
                  alt="image"
                  src="/playground_assets/ain-1500h.png"
                  className="galleries-image"
                />
                <div data-thq="thq-close-menu" className="galleries-menu-close">
                  <svg viewBox="0 0 1024 1024" className="galleries-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="galleries-nav2"
              >
                <span className="galleries-text04">About</span>
                <span className="galleries-text05">Features</span>
                <span className="galleries-text06">Pricing</span>
                <span className="galleries-text07">Team</span>
                <span className="galleries-text08">Blog</span>
              </nav>
              <div className="galleries-container02">
                <input
                  type="text"
                  placeholder="placeholder"
                  className="input galleries-textinput1"
                />
                <button className="button">Register</button>
              </div>
            </div>
            <div className="galleries-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="galleries-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="galleries-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="galleries-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="galleries-banner">
          <h1 className="galleries-text09">Our Mission</h1>
          <span className="galleries-text10">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum
                mi ut rhoncus. Integer in dignissim tortor. Sed non volutpat
                turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                ortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <button className="galleries-button button">Read More</button>
        </div>
        <div className="galleries-gallery">
          <div className="galleries-container03">
            <div className="galleries-container04">
              <h1 className="galleries-text14">Project Title</h1>
              <span className="galleries-text15">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="galleries-container05">
            <div className="galleries-container06">
              <h1 className="galleries-text17">Project Title</h1>
              <span className="galleries-text18">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="galleries-container07">
            <div className="galleries-container08">
              <h1 className="galleries-text20">Project Title</h1>
              <span className="galleries-text21">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="galleries-container09">
            <div className="galleries-container10">
              <h1 className="galleries-text23">Project Title</h1>
              <span className="galleries-text24">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="galleries-container11">
            <div className="galleries-container12">
              <h1 className="galleries-text26">Project Title</h1>
              <span className="galleries-text27">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
          <div className="galleries-container13">
            <div className="galleries-container14">
              <h1 className="galleries-text29">Project Title</h1>
              <span className="galleries-text30">
                <span>Lorem ipsum dolor sit amet</span>
              </span>
            </div>
          </div>
        </div>
        <div className="galleries-gallery1">
          <div className="galleries-container15">
            <div className="galleries-container16">
              <div className="galleries-container17">
                <GalleryCard2 rootClassName="rootClassName2"></GalleryCard2>
              </div>
              <div className="galleries-container18">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="galleries-container19">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="galleries-container20">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
        </div>
        <footer className="galleries-footer">
          <img
            alt="logo"
            src="/playground_assets/ain-1500h.png"
            className="galleries-image1"
          />
          <span className="galleries-text32">
            © 2023 DTU AUV, All Rights Reserved.
          </span>
          <div className="galleries-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="galleries-icon10"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="galleries-icon12"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="galleries-icon14"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .galleries-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .galleries-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .galleries-logo {
            width: 57px;
            height: 59px;
          }
          .galleries-desktop-menu {
            display: flex;
          }
          .galleries-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .galleries-text01 {
            margin-left: var(--dl-space-space-twounits);
          }
          .galleries-text02 {
            margin-left: var(--dl-space-space-twounits);
          }
          .galleries-text03 {
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
          }
          .galleries-select {
            width: 99px;
            height: 22px;
          }
          .galleries-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .galleries-register {
            width: 204px;
            margin-left: 4px;
          }
          .galleries-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .galleries-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .galleries-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .galleries-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .galleries-image {
            height: 2rem;
          }
          .galleries-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .galleries-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .galleries-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .galleries-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .galleries-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .galleries-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .galleries-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .galleries-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .galleries-icon-group {
            display: flex;
          }
          .galleries-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .galleries-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .galleries-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .galleries-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .galleries-text09 {
            font-size: 3rem;
            text-align: center;
          }
          .galleries-text10 {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .galleries-button {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .galleries-button:hover {
            transform: scale(1.02);
          }
          .galleries-gallery {
            width: 100%;
            height: 1208px;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas: 'a b b' 'a b b' 'a c d' 'a c d' 'e e d' 'e e f' 'e e f';
            grid-template-columns: 1fr 1fr 1fr;
          }
          .galleries-container03 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 1;
            grid-area: a;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1522814208878-08129b4b76f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGxpZ2h0aG91c2UlMjBwYXN0ZWx8ZW58MHx8fHwxNjI2NDM5Nzkx&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .galleries-container03:hover {
            transform: scale(0.98);
          }
          .galleries-container04 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-text14 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .galleries-text15 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .galleries-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            grid-area: b;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGdyZWVuJTIwbGFtcCUyMHBhc3RlbHxlbnwwfHx8fDE2MjY0Mzk4NDA&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .galleries-container05:hover {
            transform: scale(0.98);
          }
          .galleries-container06 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-text17 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .galleries-text18 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .galleries-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            grid-area: c;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1528696892704-5e1122852276?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBpbmslMjB0ZWElMjBwYXN0ZWx8ZW58MHx8fHwxNjI2NDM5ODU2&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .galleries-container07:hover {
            transform: scale(0.98);
          }
          .galleries-container08 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-text20 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .galleries-text21 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .galleries-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            grid-area: d;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHllbGxvdyUyMGljZWNyZWFtfGVufDB8fHx8MTYyNjQzOTg4OQ&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .galleries-container09:hover {
            transform: scale(0.98);
          }
          .galleries-container10 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-text23 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .galleries-text24 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .galleries-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            grid-area: e;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1551500226-b50b653e33e8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwYXN0ZWwlMjBjb2ZmZWUlMjBncmVlbnxlbnwwfHx8fDE2MjY0Mzk5MzA&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .galleries-container11:hover {
            transform: scale(0.98);
          }
          .galleries-container12 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-text26 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .galleries-text27 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .galleries-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            grid-area: f;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1591101761702-0c4927df1d52?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fHBhc3RlbCUyMHBpbmslMjBjb3R0b258ZW58MHx8fHwxNjI2NDQwMDUw&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .galleries-container13:hover {
            transform: scale(0.98);
          }
          .galleries-container14 {
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-text29 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-weight: 600;
          }
          .galleries-text30 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .galleries-gallery1 {
            width: 100%;
            height: 917px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .galleries-container15 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-container16 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .galleries-container17 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .galleries-container18 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .galleries-container19 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .galleries-container20 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .galleries-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .galleries-image1 {
            width: 69px;
            height: 57px;
            object-fit: cover;
          }
          .galleries-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .galleries-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .galleries-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .galleries-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          @media (max-width: 991px) {
            .galleries-mobile-menu {
              top: 148px;
              left: -22px;
              margin-right: 531px;
            }
            .galleries-image {
              width: 59px;
              height: 61px;
            }
            .galleries-textinput1 {
              width: 129px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .galleries-text10 {
              max-width: 100%;
            }
            .galleries-gallery {
              grid-gap: var(--dl-space-space-unit);
            }
            .galleries-text14 {
              text-align: center;
            }
            .galleries-text15 {
              text-align: center;
            }
            .galleries-text17 {
              text-align: center;
            }
            .galleries-text18 {
              text-align: center;
            }
            .galleries-text20 {
              text-align: center;
            }
            .galleries-text21 {
              text-align: center;
            }
            .galleries-text23 {
              text-align: center;
            }
            .galleries-text24 {
              text-align: center;
            }
            .galleries-text26 {
              text-align: center;
            }
            .galleries-text27 {
              text-align: center;
            }
            .galleries-text29 {
              text-align: center;
            }
            .galleries-text30 {
              text-align: center;
            }
            .galleries-container20 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .galleries-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .galleries-text01 {
              margin-left: var(--dl-space-space-unit);
            }
            .galleries-text02 {
              margin-left: var(--dl-space-space-unit);
            }
            .galleries-text03 {
              margin-left: var(--dl-space-space-unit);
            }
            .galleries-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .galleries-text10 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .galleries-gallery {
              height: auto;
              display: flex;
              padding: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .galleries-gallery1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .galleries-container16 {
              flex-direction: column;
            }
            .galleries-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .galleries-text32 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .galleries-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .galleries-desktop-menu {
              display: none;
            }
            .galleries-btn-group {
              display: none;
            }
            .galleries-burger-menu {
              display: flex;
            }
            .galleries-mobile-menu {
              padding: 16px;
            }
            .galleries-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .galleries-gallery {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .galleries-gallery1 {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .galleries-container15 {
              width: auto;
            }
            .galleries-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .galleries-image1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .galleries-text32 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Galleries

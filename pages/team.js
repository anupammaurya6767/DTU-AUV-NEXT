import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import FeatureCard3 from '../components/feature-card3'
import GalleryCard32 from '../components/gallery-card32'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - Steel Sour Porpoise</title>
          <meta property="og:title" content="Team - Steel Sour Porpoise" />
        </Head>
        <header data-thq="thq-navbar" className="team-navbar-interactive">
          <Image
            alt="logo"
            src="/playground_assets/ain-1500h.png"
            loading="lazy"
            className="team-logo"
            width={57}
            height={59}
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="team-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="team-nav"
            >
              <span>About</span>
              <span className="team-text01">Features</span>
              <span className="team-text02">Pricing</span>
              <span className="team-text03">Team</span>
              <select className="team-select">
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="team-btn-group"></div>
          <input type="text" placeholder="placeholder" className="input" />
          <button className="team-register button">Register</button>
          <div data-thq="thq-burger-menu" className="team-burger-menu">
            <svg viewBox="0 0 1024 1024" className="team-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="team-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="team-nav1"
            >
              <div className="team-container1">
                <img
                  alt="image"
                  src="/playground_assets/ain-1500h.png"
                  className="team-image"
                />
                <div data-thq="thq-close-menu" className="team-menu-close">
                  <svg viewBox="0 0 1024 1024" className="team-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="team-nav2"
              >
                <span className="team-text04">About</span>
                <span className="team-text05">Features</span>
                <span className="team-text06">Pricing</span>
                <span className="team-text07">Team</span>
                <span className="team-text08">Blog</span>
              </nav>
              <div className="team-container2">
                <input
                  type="text"
                  placeholder="placeholder"
                  className="input team-textinput1"
                />
                <button className="button">Register</button>
              </div>
            </div>
            <div className="team-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="team-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="team-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="team-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="team-features">
          <h1 className="team-text09">
            <span>Explore our services</span>
            <br></br>
            <span></span>
          </h1>
          <span className="team-text12">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
              lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
              pellentesque nulla leo, sagittis vehicula sem commodo nec.​
            </span>
            <span></span>
          </span>
          <div className="team-container3">
            <FeatureCard3 rootClassName="rootClassName"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName3"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName5"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName1"></FeatureCard3>
          </div>
        </div>
        <div className="team-gallery">
          <div className="team-container4">
            <GalleryCard32 rootClassName="rootClassName"></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName1"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName3"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName2"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName5"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName6"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName7"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName8"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName9"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName10"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName11"
            ></GalleryCard32>
          </div>
        </div>
        <div className="team-gallery1">
          <div className="team-container5">
            <GalleryCard32 rootClassName="rootClassName12"></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName13"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName14"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName15"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName16"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName17"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName18"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName19"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName20"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName21"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName22"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName23"
            ></GalleryCard32>
          </div>
        </div>
        <div className="team-gallery2">
          <div className="team-container6">
            <GalleryCard32 rootClassName="rootClassName36"></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName37"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName38"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName39"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName40"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName41"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName42"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName43"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName44"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName45"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName46"
            ></GalleryCard32>
            <GalleryCard32
              image_src="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName47"
            ></GalleryCard32>
          </div>
          <footer className="team-footer">
            <img
              alt="logo"
              src="/playground_assets/ain-1500h.png"
              className="team-image1"
            />
            <span className="team-text15">
              © 2023 DTU AUV, All Rights Reserved.
            </span>
            <div className="team-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="team-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="team-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="team-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .team-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .team-navbar-interactive {
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
          .team-logo {
            width: 57px;
            height: 59px;
          }
          .team-desktop-menu {
            display: flex;
          }
          .team-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .team-text01 {
            margin-left: var(--dl-space-space-twounits);
          }
          .team-text02 {
            margin-left: var(--dl-space-space-twounits);
          }
          .team-text03 {
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
          }
          .team-select {
            width: 99px;
            height: 22px;
          }
          .team-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-register {
            width: 204px;
            margin-left: 4px;
          }
          .team-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .team-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .team-mobile-menu {
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
          .team-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .team-image {
            height: 2rem;
          }
          .team-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .team-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .team-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .team-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .team-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .team-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .team-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .team-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .team-icon-group {
            display: flex;
          }
          .team-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .team-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .team-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .team-features {
            width: 100%;
            height: 578px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .team-text09 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .team-text12 {
            color: var(--dl-color-gray-700);
            width: 70%;
            font-size: 1.15rem;
            text-align: center;
          }
          .team-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .team-gallery {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .team-container4 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .team-gallery1 {
            width: 100%;
            height: 1029px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .team-container5 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .team-gallery2 {
            width: 100%;
            height: 1002px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .team-container6 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .team-footer {
            width: 100%;
            height: 200px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .team-image1 {
            width: 57px;
            height: 57px;
            object-fit: cover;
          }
          .team-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .team-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .team-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          @media (max-width: 991px) {
            .team-mobile-menu {
              top: 148px;
              left: -22px;
              margin-right: 531px;
            }
            .team-image {
              width: 59px;
              height: 61px;
            }
            .team-textinput1 {
              width: 129px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .team-text09 {
              text-align: center;
            }
            .team-text12 {
              text-align: center;
            }
            .team-container3 {
              grid-template-columns: 1fr 1fr;
            }
            .team-container4 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .team-container5 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .team-container6 {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .team-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-text01 {
              margin-left: var(--dl-space-space-unit);
            }
            .team-text02 {
              margin-left: var(--dl-space-space-unit);
            }
            .team-text03 {
              margin-left: var(--dl-space-space-unit);
            }
            .team-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-text09 {
              text-align: center;
            }
            .team-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-container4 {
              grid-template-columns: 1fr 1fr;
            }
            .team-gallery1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-container5 {
              grid-template-columns: 1fr 1fr;
            }
            .team-gallery2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-container6 {
              grid-template-columns: 1fr 1fr;
            }
            .team-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-text15 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .team-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .team-desktop-menu {
              display: none;
            }
            .team-btn-group {
              display: none;
            }
            .team-burger-menu {
              display: flex;
            }
            .team-mobile-menu {
              padding: 16px;
            }
            .team-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .team-container3 {
              grid-template-columns: 1fr;
            }
            .team-gallery {
              padding: var(--dl-space-space-unit);
            }
            .team-container4 {
              grid-template-columns: 1fr;
            }
            .team-gallery1 {
              padding: var(--dl-space-space-unit);
            }
            .team-container5 {
              grid-template-columns: 1fr;
            }
            .team-gallery2 {
              padding: var(--dl-space-space-unit);
            }
            .team-container6 {
              grid-template-columns: 1fr;
            }
            .team-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .team-image1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-text15 {
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

export default Team

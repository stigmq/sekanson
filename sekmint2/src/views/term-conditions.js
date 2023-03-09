import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './term-conditions.css'

const TermConditions = (props) => {
  return (
    <div className="term-conditions-container">
      <Helmet>
        <title>term-conditions - AR Powered By ODlabs</title>
        <meta
          property="og:title"
          content="term-conditions - AR Powered By ODlabs"
        />
      </Helmet>
      <header data-role="Accordion" className="term-conditions-header">
        <img
          alt="logo"
          src="/playground_assets/mz-1500h.png"
          className="term-conditions-image"
        />
        <div className="term-conditions-separator"></div>
        <nav className="term-conditions-nav">
          <NavigationLinks
            text="-"
            text1="MINT"
            text2="REWARDS"
            text3="TRY ME"
            text4="-"
            rootClassName="rootClassName16"
          ></NavigationLinks>
        </nav>
        <div
          data-role="AccordionHeader"
          className="term-conditions-accordion-header"
        >
          <svg viewBox="0 0 1024 1024" className="term-conditions-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-role="AccordionContent"
          className="term-conditions-accordion-content"
        >
          <div className="term-conditions-nav1">
            <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          </div>
        </div>
        <button className="term-conditions-button button">ConnectWallet</button>
        <button className="term-conditions-button1 button">Disconnect</button>
        <button className="term-conditions-button2 button">Reset</button>
      </header>
      <div className="term-conditions-pricing">
        <div className="term-conditions-container1">
          <div className="term-conditions-banner">
            <h1 className="term-conditions-text">TERM &amp; CONDITIONS</h1>
            <span className="term-conditions-text01">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed non volutpat turpis. Mauris
                  luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim ortor.
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
            <button className="term-conditions-button3 button">
              Read More
            </button>
          </div>
        </div>
      </div>
      <footer className="term-conditions-footer">
        <div className="term-conditions-container2">
          <nav className="term-conditions-nav2">
            <span className="term-conditions-text05">
              TERM &amp; CONDITIONS
            </span>
            <span className="term-conditions-text06">PRIVACY</span>
            <span className="term-conditions-text07">LICENSE</span>
            <span className="term-conditions-text08">
              NFT PURCHASE AGREEMENT
            </span>
          </nav>
        </div>
        <div className="term-conditions-separator1"></div>
        <div className="term-conditions-container3">
          <span className="term-conditions-text09">
            © 2023 ODLABS, All Rights Reserved.
          </span>
          <div className="term-conditions-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="term-conditions-icon2"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="term-conditions-icon4"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="term-conditions-icon6">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
            <img
              alt="image"
              src="/playground_assets/r-200h.gif"
              className="term-conditions-image1"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TermConditions

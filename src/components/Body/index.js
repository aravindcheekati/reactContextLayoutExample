// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const renderLeftNav = () => (
    <div className="left-nav">
      <h1>Left Navbar Menu</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )

  const renderContent = () => (
    <div className="content-container">
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </div>
  )

  const renderRightNav = () => (
    <div className="Right-Nav">
      <h1>Right Navbar</h1>
      <div className="ad">
        <p>Ad 1</p>
      </div>
      <div className="ad">
        <p>Ad 2</p>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar ? renderLeftNav() : null}
            {showContent ? renderContent() : null}
            {showRightNavbar ? renderRightNav() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body

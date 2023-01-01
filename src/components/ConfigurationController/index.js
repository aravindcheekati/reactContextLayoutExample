import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="bg-container">
          <div className="inner-container">
            <h1>Layout</h1>
            <div>
              <input
                type="checkbox"
                id="content"
                onChange={onToggleShowContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Left Navbar"
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="Left Navbar">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Right Navbar"
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="Right Navbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

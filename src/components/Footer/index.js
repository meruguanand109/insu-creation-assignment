import {IoLogoFacebook, IoLogoTwitter, IoLogoInstagram} from 'react-icons/io5'
import {Component} from 'react'
import './index.css'

class Footer extends Component {
  state = {
    isSubscribed: false,
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="footer">
        <div className="footer-subscribe-section">
          <div>
            <h1 className="footer-ss-h">Subscribe Our Newsletter!</h1>
            <p className="footer-ss-p">
              Elementurn Ex Similique Sallicitudin Evenist Sem Evenist Prain,
              Iste Euismadi QUiat Fugait Malestine Leo Placerat Tenetur.
            </p>
          </div>
          <div className="sub-btn-box">
            <input
              type="checkbox"
              className="sub-input"
              id="subInput"
              onClick={this.onClickCheckBox}
            />
            <label htmlFor="subInput" className="sub-input-label">
              {isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
            </label>
          </div>
        </div>
        <div className="row">
          <ul className="quick-links-section">
            <p className="f-p">Quick Links</p>
            <li className="quick-link">Home</li>
            <li className="quick-link">About Us</li>
            <li className="quick-link">Careers</li>
            <li className="quick-link">Home</li>
          </ul>
          <ul className="useful-links-section">
            <p className="f-p">Useful Links</p>
            <li className="useful-link">Help Center</li>
            <li className="useful-link">Contact Us</li>
            <li className="useful-link">FAQ</li>
            <li className="useful-link">Parent Community</li>
          </ul>
          <ul className="address-section">
            <p className="f-p">School Hours</p>
            <li className="address-link">8 AM - 5 PM, Monday - Saturday</li>
            <li className="address-link">
              Aut, Quae Convallis Minim Cum Omarel Pede Ut Retro Totam Dictum
              Canvallis.
            </li>
            <li className="address-link">
              Follow Us
              <IoLogoFacebook className="sm-icons" />
              <IoLogoTwitter className="sm-icons" />
              <IoLogoInstagram className="sm-icons" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Footer

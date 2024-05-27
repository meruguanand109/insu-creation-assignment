import Reviews from '../Reviews'
import Footer from '../Footer'

import './index.css'

const ContactUs = () => (
  <>
    <div className="cu-container">
      <div className="cu-card-1">
        <h1 className="cu-h">CONTACT US</h1>
        <img
          src="https://i.pinimg.com/564x/24/ff/cf/24ffcfb1e082b236f6898007351d7f76.jpg"
          alt="img"
          className="cu-pic"
        />
      </div>
      <div className="cu-row">
        <form className="cu-form">
          <label className="input-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="name-input"
            placeholder="Enter Your Phone Name"
          />
          <label className="input-label" htmlFor="name">
            Phone Number:
          </label>
          <input
            type="text"
            id="name"
            className="name-input"
            placeholder="Enter Your Phone Number"
          />
          <label className="input-label" htmlFor="name">
            Email:
          </label>
          <input
            type="text"
            id="name"
            className="name-input"
            placeholder="Enter Your Email"
          />
          <label className="input-label" htmlFor="name">
            Your Message:
          </label>
          <textarea
            id="name"
            className="textarea"
            placeholder="Enter Your Message"
            rows="4"
            cols="50"
          />
          <button type="button" className="cu-form-send-btn">
            Send
          </button>
        </form>
        <div className="cu-address">
          <ul className="cu-address-list">
            <li className="cu-address-item">
              <img
                src="https://i.pinimg.com/564x/1f/17/ff/1f17ff9b6a8ee7a13c2b68f1960d04ba.jpg"
                alt="img"
                className="location-img"
              />
              <div className="cu-address-item-box">
                <h5 className="cu-address-item-box-h">Visit Us :</h5>
                <p className="cu-address-item-box-p">
                  27 Division St,New York, Ny 10002, USA
                </p>
              </div>
            </li>
            <li className="cu-address-item">
              <img
                src="https://i.pinimg.com/564x/42/9d/45/429d456ed36a9ab53e887fe057e18240.jpg"
                alt="img"
                className="location-img"
              />
              <div className="cu-address-item-box">
                <h5 className="cu-address-item-box-h">Phone Number :</h5>
                <p className="cu-address-item-box-p">+(800) 123 456 789</p>
              </div>
            </li>
            <hr />
            <li className="cu-address-item">
              <img
                src="https://i.pinimg.com/564x/22/90/79/229079c8f5240851cece598cf8eee770.jpg"
                alt="img"
                className="location-img"
              />
              <div className="cu-address-item-box">
                <h5 className="cu-address-item-box-h">Email :</h5>
                <p className="cu-address-item-box-p">Admin@Admin.com</p>
              </div>
            </li>
          </ul>
          <img
            src="https://i.pinimg.com/564x/8d/b0/5c/8db05c10798ebe314ec846fce7d59f05.jpg"
            alt="img"
            className="address-img"
          />
        </div>
      </div>
    </div>
    <Reviews />
    <Footer />
  </>
)
export default ContactUs

import Reviews from '../Reviews'
import Footer from '../Footer'
import './index.css'

const About = () => (
  <>
    <div className="about-container">
      <div className="as-card-1">
        <h1 className="as-card-h">About Us</h1>
        <img
          src="https://i.pinimg.com/564x/26/de/6e/26de6e1be3b21eab6336c03feb610e11.jpg"
          alt="img"
          className="a-img"
        />
      </div>
      <div className="as-card-2">
        <div className="as-card-2-sub">
          <h1 className="as-card-2-h">
            FIND OUT MORE ABOUT OUR BUSINESS CONSULTING
          </h1>
          <img
            src="https://i.pinimg.com/564x/83/32/a0/8332a0e14eadbd4017233f194c21d437.jpg"
            alt="img"
            className="as-img-mob"
          />
          <p className="as-card-2-p">
            Hise Sed Augue Vitae Pellentesque Varius Nec Quis Nunc. Morbi mauris
            Augue,Pulvinar Quis luctus Eget. Phasellus Gravida Lacus Quis Erors
            Laborites Nec dapibus Quam Gravitae. Hise Sed Augue Vitae
            Pellentesque Varius Nec Quis Nunc. Morbi mauris Augue,Pulvinar Quis
            luctus Eget. Morbi mauris Augue,Pulvinar Quis luctus Eget. Phasellus
            Gravida Lacus Quis Erors Laborites Nec dapibus Quam Gravitae. Hise
            Sed Augue <br />
            <br />
            Vitae Pellentesque Varius Nec Quis Nunc. Morbi mauris Augue,Pulvinar
            Quis luctus Eget. Phasellus Gravida Lacus Quis Erors Laborites Nec
          </p>
        </div>
        <img
          src="https://i.pinimg.com/564x/83/32/a0/8332a0e14eadbd4017233f194c21d437.jpg"
          alt="img"
          className="as-img"
        />
      </div>
    </div>
    <Reviews />
    <Footer />
  </>
)

export default About

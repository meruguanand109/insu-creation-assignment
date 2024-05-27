import './index.css'

const Reviews = () => (
  <div className="home-review-section">
    <h1 className="home-rs-h">Reviews From Students</h1>
    <ul className="reviews-list">
      <li className="home-rs-card">
        <p className="home-rs">
          Per Sed, Mattis Integer Viverra Euismad Maecenas Incident Phasellus
          consequat ALiquam nihil Temparibus In Assumenda? Aute Prasentium
          Fugist. Perspiciatis. Ultrices Deserunt Canvallis elius at Non.
        </p>
        <div className="home-rs-card-profile">
          <img
            src="https://i.pinimg.com/564x/f4/fa/fa/f4fafaf122d00f0775aa586b8a061d0b.jpg"
            alt="img"
            className="review-img"
          />
          <p className="home-rs-p">Jenny Wilson</p>
        </div>
      </li>
      <li className="home-rs-card">
        <p className="home-rs">
          Per Sed, Mattis Integer Viverra Euismad Maecenas Incident Phasellus
          consequat ALiquam nihil Temparibus In Assumenda? Aute Prasentium
          Fugist. Perspiciatis. Ultrices Deserunt Canvallis elius at Non.
        </p>
        <div className="home-rs-card-profile">
          <img
            src="https://i.pinimg.com/564x/8e/e5/d8/8ee5d821350d03fffe88f97d55b92ed8.jpg"
            alt="img"
            className="review-img"
          />
          <p className="home-rs-p">Jenny Wilson</p>
        </div>
      </li>
    </ul>
  </div>
)

export default Reviews

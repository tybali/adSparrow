import Counter from "./Counter";

const GrowBusiness = ({ paddingTop = 0 }) => {
  return (
    <section
      className={`grow-business-section fix section-padding pt-${paddingTop}`}
    >
      <div className="container">
        <div className="grow-business-wrapper-2">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-5">
              <div
                className="grow-business-image wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="assets/img/grow/02.jpg" alt="img" />
                <div
                  className="grap-shape float-bob-x wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/grow/grap.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="grow-business-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="assets/img/bale.png" alt="img" />
                    Grow your Business
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Innovative Business Increase and Branding Solutions
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta.
                </p>
                <div className="grow-counting-area">
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={85} />
                      </span>
                      %
                    </h2>
                    <p>Increase Sales</p>
                  </div>
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={15} />
                      </span>
                      %
                    </h2>
                    <p>Reduced Losses</p>
                  </div>
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={93} />
                      </span>
                      %
                    </h2>
                    <p>Business growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GrowBusiness;

export const GrowBusiness2 = ({ bg }) => {
  return (
    <section className={`grow-business-section fix section-padding ${bg}`}>
      <div className="container">
        <div className="grow-business-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="grow-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="assets/img/bale.png" alt="img" />
                    Grow your Business
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Innovative Business Increase and Branding Solutions
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta.
                </p>
                <div className="grow-percent-area">
                  <div className="row g-4">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="grow-percent-items">
                        <h2>
                          <span className="count">
                            <Counter end={85} />
                          </span>
                          %
                        </h2>
                        <h3>Increase Sales</h3>
                        <p>
                          Sed perspiciatis unde omnis natus error sit voluptate
                        </p>
                        <div className="vector-shape pt-3">
                          <img src="assets/img/vector.png" alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="grow-percent-items">
                        <h2>
                          <span className="count">
                            <Counter end={15} />
                          </span>
                          %
                        </h2>
                        <h3>Reduced Losses</h3>
                        <p>
                          Sed perspiciatis unde omnis natus error sit voluptate
                        </p>
                        <div className="vector-shape pt-3">
                          <img src="assets/img/vector.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="grow-image-items">
                <div className="grow-shape float-bob-y">
                  <img src="assets/img/grow/grow-shape.png" alt="shape-img" />
                </div>
                <div className="frame-shape">
                  <img src="assets/img/grow/frame-shape.png" alt="shape-img" />
                </div>
                <div className="user-shape float-bob-x">
                  <img src="assets/img/grow/user-shape.png" alt="shape-img" />
                </div>
                <div className="grow-image">
                  <img src="assets/img/grow/01.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

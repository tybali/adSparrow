const Faq = () => {
  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Some Question
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="false"
                        aria-controls="faq1"
                      >
                        Why Need Digital Marketing For Build Business ?
                      </button>
                    </h4>
                    <div
                      id="faq1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="true"
                        aria-controls="faq2"
                      >
                        How to Increase Web Traffic ?
                      </button>
                    </h4>
                    <div
                      id="faq2"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        How to Development SEO Optimization ?
                      </button>
                    </h4>
                    <div
                      id="faq3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        Have Any Professional Team Member ?
                      </button>
                    </h4>
                    <div
                      id="faq4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        aria-expanded="false"
                        aria-controls="faq5"
                      >
                        Have you any Global Customer ?
                      </button>
                    </h4>
                    <div
                      id="faq5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan tiueaque quae
                        abillo inventore veritatis et quasi architecto beatae
                        vitae dicta explicabo voluptatem voluptas aspernatur
                      </div>
                    </div>
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
export default Faq;

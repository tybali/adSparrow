import Image from "next/image";

const OurProcess = () => {
  return (
    <section className="working-process-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Working Process
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Complete Our Work to Follow <br />
            Some Easy Ways
          </h2>
        </div>

        <div className="process-arrows">
          <div className="process-step-container wow fadeInUp" data-wow-delay=".2s">
            <div className="process-single-arrow">
            </div>
            <div className="counter">
            <div className="process-step-count">1</div>
            <div className="dotted" />
            </div>
          </div>

          <div className="process-step-container wow fadeInUp" data-wow-delay=".2s">
            <div className="process-single-arrow">
            </div>
            <div className="counter">
            <div className="process-step-count">2</div>
            <div className="dotted" />
            </div>
          </div>

          <div className="process-step-container wow fadeInUp" data-wow-delay=".2s">
            <div className="process-single-arrow">
            </div>
            <div className="counter">
            <div className="process-step-count">3</div>
            <div className="dotted" />
            </div>
          </div>

          <div className="process-step-container wow fadeInUp" data-wow-delay=".2s">
            <div className="process-single-arrow">
            </div>
            <div className="counter">
            <div className="process-step-count">4</div>
            <div className="dotted" />
            </div>
          </div>

          <div className="process-step-container wow fadeInUp" data-wow-delay=".2s">
            <div className="process-single-arrow">
            </div>
            <div className="counter">
            <div className="process-step-count">5</div>
            <div className="dotted" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurProcess;

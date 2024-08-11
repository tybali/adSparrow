import Counter from "./Counter";
const FunFactCounter = ({ style }) => {
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={98} />
            </span>
            %
          </h2>
          <h6>Average Conversion Rate</h6>
          <p>Sed perspiciatis unde omnis este natus sit volupta</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className={`funfact-box-items active`}>
          <h2>
            <span className="count">
              <Counter end={35} />
            </span>
            m+
          </h2>
          <h6>Traffic Generated</h6>
          <p>Sed perspiciatis unde omnis este natus sit volupta</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={97} />
            </span>
            %
          </h2>
          <h6>Positive Customer Review</h6>
          <p>Sed perspiciatis unde omnis este natus sit volupta</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={92} />
            </span>
            %
          </h2>
          <h6>Professional Team Members</h6>
          <p>Sed perspiciatis unde omnis este natus sit volupta</p>
        </div>
      </div>
    </div>
  );
};
export default FunFactCounter;

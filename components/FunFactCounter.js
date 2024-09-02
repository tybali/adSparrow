import Counter from "./Counter";
const FunFactCounter = ({ style }) => {
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
        
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
        className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
        
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
        className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
        
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
        className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
        
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

import Image from "next/image";
import Icon1 from "@assets/img/working-process/icon-1.png";
import Icon2 from "@assets/img/working-process/icon-2.png";
import Icon3 from "@assets/img/working-process/icon-3.png";
import ArrowDown from "@assets/img/working-process/arrow-down.png";
import ArrowReverse from "@assets/img/working-process/arrow-revers.png";

const WorkingProcess = ({
  title = "",
  firstStepTitle = "",
  firstStepDesc = "",
  secondStepTitle = "",
  secondStepDesc = "",
  thirdStepTitle = "",
  thirdStepDescr = "",
}) => {
  return (
    <section className="working-section-2 section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".1s">
            {title}
          </h2>
        </div>
        <div className="row align-items-center justify-content-between">
          {/* try something new */}
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".1s">
            <div className="working-card-items">
              <div className="icon">
                <Image src={Icon1} alt="img" />
              </div>
              <div className="content">
                <span className="sub-title">Step 01</span>
                <h3>{firstStepTitle}</h3>
                <p>{firstStepDesc}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".1s">
            <div className="arrow-image">
              <Image src={ArrowDown} alt="img" />
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".1s">
            <div className="arrow-image text-center">
              <Image src={ArrowReverse} alt="img" />
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".1s">
            <div className="working-card-items">
              <div className="content">
                <span className="sub-title">Step 02</span>
                <h3>{secondStepTitle}</h3>
                <p>{secondStepDesc}</p>
              </div>
              <div className="icon">
                <Image src={Icon2} alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay=".1s">
            <div className="working-card-items">
              <div className="icon">
                <Image src={Icon3} alt="img" />
              </div>
              <div className="content">
                <span className="sub-title">Step 03</span>
                <h3>{thirdStepTitle}</h3>
                <p>{thirdStepDescr}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".1s">
            <div className="arrow-image">
              <Image src={ArrowDown} alt="img" />
            </div>
          </div>
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".1s">
            <div className="arrow-image text-center">
              <Image src={ArrowReverse} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;

export const WorkingProcess2 = ({
  title = "",
  firstStepTitle = "",
  firstStepDesc = "",
  secondStepTitle = "",
  secondStepDesc = "",
  thirdStepTitle = "",
  thirdStepDescr = "",
  imgSrc,
}) => {
  return (
    <section className="working-process-section section-padding">
      <div className="container">
        <div className="section-title text-left" style={{ marginTop: 50 }}>
          <h2 className="wow fadeInUp" data-wow-delay=".1s">
            {title}
          </h2>
        </div>
        <div className="work-process-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="work-process-content">
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h4
                    style={{ display: "flex", alignItems: "center", gap: 20 }}
                  >
                    <div className="digit-box">01</div>
                    {firstStepTitle}
                  </h4>
                  <p>{firstStepDesc}</p>
                </div>
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h4
                    style={{ display: "flex", alignItems: "center", gap: 20 }}
                  >
                    <div className="digit-box">02</div>
                    {secondStepTitle}
                  </h4>
                  <p>{secondStepDesc}</p>
                </div>
                <div
                  className="work-process-items wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h4
                    style={{ display: "flex", alignItems: "center", gap: 20 }}
                  >
                    {" "}
                    <div className="digit-box">03</div>
                    {thirdStepTitle}
                  </h4>
                  <p>{thirdStepDescr}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="work-process-image wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="service-thumbs">
                  <Image
                    src={imgSrc}
                    layout="fill"
                    className="props-image"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

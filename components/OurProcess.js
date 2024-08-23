"use client"

import Image from "next/image";
import Illustration from "@assets/img/working-process/process-illustration.jpg";
import RoundFillAnimation from "./RoundFillAnimation";
import { useRef } from "react";

const OurProcess = () => {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} className="working-process-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            How We Roll <br />
            <p className="sub-heading">
              {" "}
              SPARKing your brand from ignition to evolution,{" "}
              <span style={{ color: "#f06057" }}>winning results </span> along
              the way with flair and precision.
            </p>
          </h2>
        </div>
        <div className="process-container">
          <Image
            src={Illustration}
            height={588}
            width={540}
            alt="digital marketing strategy"
            className="resize-illustration wow fadeInUp"
                    data-wow-delay=".5s"
          />

          <div className="process-steps-column">
            <div className="process-step">
              <RoundFillAnimation character={"S"} sectionRef={sectionRef} />
              <div className="process-step-content">
                <h3>Spark – IGNITE | ENVISION</h3>
                <h5 style={{ marginTop: 6, fontWeight: "normal" }}>
                  We light the fuse by understanding your brand's unique vibe
                  and revenue model.
                </h5>
              </div>
            </div>

            <div className="process-step">
            <RoundFillAnimation character={"P"} sectionRef={sectionRef} />
              <div className="process-step-content">
                <h3>Pulse – PLAN | STRATEGIZE</h3>
                <h5 style={{ marginTop: 6, fontWeight: "normal" }}>
                  We tap into the heartbeat of your market, creating a marketing
                  strategy that pulses with potential
                </h5>
              </div>
            </div>

            <div className="process-step">
            <RoundFillAnimation character={"A"} sectionRef={sectionRef} />
              <div className="process-step-content">
                <h3>Amplify – EXECUTE | BOOST</h3>
                <h5 style={{ marginTop: 6, fontWeight: "normal" }}>
                  We crank up the volume, amplifying your presence across
                  digital platforms
                </h5>
              </div>
            </div>

            <div className="process-step">
            <RoundFillAnimation character={"R"} sectionRef={sectionRef} />
              <div className="process-step-content">
                <h3>Refine – TWEAK | POLISH</h3>
                <h5 style={{ marginTop: 6, fontWeight: "normal" }}>
                  We fine-tune the details, making sure everything is sharp and
                  on point.
                </h5>
              </div>
            </div>

            <div className="process-step">
            <RoundFillAnimation character={"K"} sectionRef={sectionRef} />
              <div className="process-step-content">
                <h3>Keep – MEASURE | EVOLVE</h3>
                <h5 style={{ marginTop: 6, fontWeight: "normal" }}>
                  We keep the momentum going, adapting and evolving to keep your
                  brand ahead of the curve.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

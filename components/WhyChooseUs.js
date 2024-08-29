import Image from "next/image";
import Illustration from "@assets/img/why-choose-us.webp";
import RoundFillAnimation from "./RoundFillAnimation";
import { Check } from "./Check";

const WhyChooseUs = () => {
  return (
    <section className="working-process-section section-padding">
      <div className="container">
        
        <div className="process-container">
          <Image
            src={Illustration}
            height={560}
            width={540}
            alt="which digital marketing agency is the best"
            className="resize-illustration wow fadeInUp"
            data-wow-delay=".5s"
          />

          <div className="process-steps-column" style={{ gap: 10 }}>
          <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ textAlign: "left"}}>
            Why Choose Us? Because Mediocre is for the Other Guys <br />
          </h2>
        </div>
            <p className="why-choose-us-text wow fadeInUp">
              Ever wonder why some agencies are all talk and no results? That’s
              not us. At Adsprarrow, we do things differently:
            </p>
            <ul>
              <li className="why-choose-us-text wow fadeInUp">
                <Check />{" "}
                <div>
                  <span style={{ fontWeight: 600 }}>We Make Results, Not Excuses:</span> You want results? We deliver.
                  From epic sales to jaw-dropping leads, we turn data into
                  dollars.
                </div>
              </li>

              <li className="why-choose-us-text wow fadeInUp">
                <Check />{" "}
                <div>
                <span style={{ fontWeight: 600 }}>Data Nerds with a Purpose:</span> We treat data like gold. Clean, precise, and ready to make your campaigns shine.
                </div>
              </li>

              <li className="why-choose-us-text wow fadeInUp">
                <Check />{" "}
                <div>
                <span style={{ fontWeight: 600 }}>Marketing Magic with a Smile:</span> Forget the fluff. We focus on what works, and we sprinkle in some fun while we’re at it.
                </div>
              </li>

              <li className="why-choose-us-text wow fadeInUp">
                <Check />{" "}
                <div>
                <span style={{ fontWeight: 600 }}>Optimize Like a Boss:</span> We don’t just tweak; we obsess. If something’s not working, we fix it—fast.
                </div>
              </li>

              <li className="why-choose-us-text wow fadeInUp">
                <Check />{" "}
                <div>
                <span style={{ fontWeight: 600 }}>Plain English, No Jargon:</span> We talk your language. No tech speak—just clear, actionable advice.
                </div>
              </li>

              <li className="why-choose-us-text wow fadeInUp">
                <Check />{" "}
                <div>
                <span style={{ fontWeight: 600 }}>Your Goals, Our Mission:</span> We’re not just a service; we’re your partner in crime. Your success is our win.
                </div>
              </li>

              {/* <li className="why-choose-us-text">
                <Check />{" "}
                <div>
                Winning is Our Game: We’re all about results. Check our case studies; we let our work do the talking. 
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

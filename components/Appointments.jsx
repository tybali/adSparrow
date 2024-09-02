"use client";

const { useState } = require("react");
import { toast } from "react-hot-toast";

export const Appointments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Append Function
  const appendSpreadsheet = async (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && phone !== "") {
      toast.success(
        "Thank you for connecting us! We will get back to you shortly."
      );
      fetch("/api/appointments", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => {
          // Handle the response data here
          if (data?.message === "success") {
            console.log("Success 200");
            setEmail("");
            setName("");
            setPhone("");
            setMessage("");
          } else console.log("Something went wrong!");
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="col-xxl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".1s">
      <div className="hero-contact-box">
        <h4>Let's Talk</h4>
        <p style={{ fontSize: 14, marginTop: 5 }}>
          Free Consultation: “ We’ll turn your online hiccups into smooth
          sailing—no sweat!”
        </p>
        <div id="contact-form" className="contact-form-item">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="form-clt">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-clt">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Business Email"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-clt">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-clt">
                <textarea
                
                  type="text"
                  name="business message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                />
              </div>
            </div>
            {/* <div className="col-lg-12">
                <div className="payment-save">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="save-for-next"
                    id="saveForNext"
                  />
                  <p>
                    I’ve Read and agreed to{" "}
                    <Link href="/">Terms &amp; Conditions</Link>
                  </p>
                </div>
              </div> */}
            <div className="col-lg-12">
              <button
                type="submit"
                className="theme-btn"
                onClick={(e) => appendSpreadsheet(e)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

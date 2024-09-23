"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BUDGET = [
  {
    label: "Under $750",
    value: "Under $750",
  },
  {
    label: "$750 to $1500",
    value: "$750 to $1500",
  },
  {
    label: "$1500 to $5000",
    value: "$1500 to $5000",
  },
  {
    label: "$5000 to $10000",
    value: "$5000 to $10000",
  },
  {
    label: "Above $10000",
    value: "Above $10000",
  },
];

const TEAMSIZE = [
  {
    label: "I don't have a marketing team",
    value: "I don't have a marketing team",
  },
  {
    label: "1 person",
    value: "1 person",
  },
  {
    label: "2-5 persons",
    value: "2-5 persons",
  },
  {
    label: "6-10 persons",
    value: "6-10 persons",
  },
  {
    label: "10+ persons",
    value: "1-+ persons",
  },
];

export const Calender = () => {
  const router = useRouter();
  const [openDropdown, setOpenDrodown] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: null,
    website: "",
    budget: "",
    teamsize: "",
    message: ""
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Append Function
  const appendSpreadsheet = async (e) => {
    e.preventDefault();
     console.log("====", values)
    if (values.name !== "" && values.email !== "" && values.phone !== null) {

      const data = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        website: values.website,
        budget: values.budget,
        teamsize: values.teamsize,
        message: values.message,
      };
      setValues({
        name: "",
        email: "",
        phone: "",
        website: "",
        budget: "",
        teamsize: "",
        message: "",
      });
      fetch("/api/meetings", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json()) // Parse the response as JSON
        .then((data) => {
          // Handle the response data here
          if (data?.message === "success") {
            router.push("/book-a-call/schedule");
          } else console.log("Something went wrong!");
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="book-a-call-form" id="calendly">
      <div className="col-md-10 col-xl-8">
        <div
          className="contact-right aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h3 style={{ textAlign: "center", marginBottom: 20 }}>
            Work with us.
          </h3>
          <p className="call-form-description">
            {" "}
            Fill out the form below to speak with someone from our team.
          </p>
          <div id="contact-form" method="POST" className="contact-form-items">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="text"
                    name="email"
                    id="email2"
                    placeholder="Your Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    placeholder="Website URL"
                    value={values.website}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-clt select-container">
                  <input
                    type="text"
                    style={{
                      cursor: "pointer",
                    }}
                    name="budget"
                    id="budget"
                    placeholder="Monthly Marketing Budget"
                    value={values.budget}
                    onChange={(e) => e.preventDefault()}
                    onClick={(e) => {
                      e.preventDefault();
                      openDropdown === "budget"
                        ? setOpenDrodown(null)
                        : setOpenDrodown("budget");
                    }}
                  />
                  <div
                    className={`select-options ${
                      openDropdown === "budget"
                        ? "show-dropdown"
                        : "hide-dropdown"
                    }`}
                  >
                    {BUDGET.map((option) => (
                      <div
                        className="select-option"
                        onClick={() => {
                          setValues({ ...values, budget: `${option.value}` });
                          setOpenDrodown(false);
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-clt select-container">
                  <input
                    type="text"
                    style={{
                      cursor: "pointer",
                    }}
                    name="teamsize"
                    id="teamsize"
                    placeholder="Team Size"
                    value={values.teamsize}
                    onChange={(e) => e.preventDefault()}
                    onClick={(e) => {
                      e.preventDefault();
                      openDropdown === "teamsize"
                        ? setOpenDrodown(null)
                        : setOpenDrodown("teamsize");
                    }}
                  />
                  <div
                    className={`select-options ${
                      openDropdown === "teamsize"
                        ? "show-dropdown"
                        : "hide-dropdown"
                    }`}
                  >
                    {TEAMSIZE.map((option) => (
                      <div
                        className="select-option"
                        onClick={() => {
                          setValues({ ...values, teamsize: `${option.value}` });
                          setOpenDrodown(false);
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-clt">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Describe your business and marketing expectations"
                    defaultValue={""}
                    value={values.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <button
                  type="submit"
                  className="theme-btn"
                  onClick={(e) => appendSpreadsheet(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;

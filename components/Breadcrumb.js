import Link from "next/link";

const Breadcrumb = ({ pageName = "Service Details", pageTitle }) => {
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover" 
      style={{ backgroundImage: "linear-gradient(to right top, #000556, #1b2372, #32408d, #495ea8, #627dc3, #588ccf, #509bd9, #4baae0, #00aad2, #00a9be, #00a6a4, #0ba188)", marginTop: 100 }}
    >
      <div className="container">
        <div className="page-heading">
          <h1 className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" style={{ color: "#fff" }} >
            {pageTitle ? pageTitle : pageName}
          </h1>
          {/* <ul className="breadcrumb-items aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right" />
            </li>
            <li className="style-2">{pageName}</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;

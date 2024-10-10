const Breadcrumb = ({ pageName = "Service Details", pageTitle }) => {
  return (
    <div
      className="breadcrumb-wrapper" >
      <div className="container">
        <div className="page-heading">
          <h1 className="aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
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

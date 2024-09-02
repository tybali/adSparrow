import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={1} footer={4}>
      <Breadcrumb pageName="Error 404" />
      <div className="error-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="error-items text-center">
                <div className="error-image aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" >
                  <img src="assets/img/error.png" alt="img" />
                </div>
                <Link
                  href="/"
                  className="theme-btn aos-init aos-animate" data-aos="fade-up" data-aos-duration="600"
                  
                >
                  <span>
                    Back To Home
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextLayout>
  );
};
export default page;

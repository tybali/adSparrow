import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Error 404" />
      <div className="error-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="error-items text-center">
                <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/error.png" alt="img" />
                </div>
                <Link
                  href="/"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".5s"
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

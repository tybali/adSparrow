"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Calender from "@/components/Calender";
import NextLayout from "@/layouts/NextLayout";

const Schedule = () => {
  return (
    <NextLayout header={1} footer={4}>
      <Breadcrumb pageTitle={"Book a Free Consultation"} />
      <Calender />
    </NextLayout>
  );
};

export default Schedule;

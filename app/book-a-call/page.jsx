"use client";

import Breadcrumb from "@/components/Breadcrumb";
import MeetingInfo from "@/components/MeetingInfo";
import NextLayout from "@/layouts/NextLayout";

const BookACall = () => {
  return (
    <NextLayout header={1} footer={4}>
      <Breadcrumb pageTitle={"Stop Guessing. Start Growing with Data-Driven Marketing!"} />
      <MeetingInfo />
    </NextLayout>
  );
};

export default BookACall;
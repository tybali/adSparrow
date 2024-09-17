import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("./Calender"), {
  ssr: false
});


export default function CalenderCaller() {
  return (
    <div>
      <Calendly />
    </div>
  );
}
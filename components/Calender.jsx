import { InlineWidget } from "react-calendly";

export const Calender = () => {
  return (
    <div className="text-center" id="calendly">
      <div className="d-flex items-center justify-content-center"></div>
      <InlineWidget
        url="https://calendly.com/nimrab2828/30min"
        styles={{ height: "1000px", borderRadius: "5px" }}
      />
    </div>
  );
};

export default Calender;

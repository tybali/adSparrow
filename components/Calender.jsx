import { InlineWidget } from "react-calendly"
import Breadcrumb from "./Breadcrumb"
import NextLayout from "@/layouts/NextLayout"

export const Calender = () => {
    return (
        <NextLayout header={1} footer={4}>
                <Breadcrumb pageTitle={"Book a Free Consultation"} />
        <div className="text-center" id='calendly'>
                <div className="flex items-center justify-center">
                </div>
                <InlineWidget url="https://calendly.com/nimrab2828/30min" styles={{"height": "1000px", "borderRadius": "5px"}}/>
                
            </div>
            </NextLayout>
    )
}

export default Calender
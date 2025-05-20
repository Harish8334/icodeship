import web_banner from "../assets/images/Capable_service/capable_service_web.png";
import Capable_service_icon1 from "../assets/images/Capable_service/capable_service_icon1.png";
import Capable_service_icon2 from "../assets/images/Capable_service/capable_service_icon2.png";
import Capable_service_icon3 from "../assets/images/Capable_service/capable_service_icon3.png";
import Capable_service_icon4 from "../assets/images/Capable_service/capable_service_icon4.png";

const web = [
  {
    banner: {
      title: "For Your Web Development Services.",
      description:
        "We are a trusted web development company in Chennai, committed to delivering high-quality, SEO-friendly, and mobile-responsive websites. Our expert team ensures timely delivery without compromising on quality. Looking for a reliable partner? Contact us for affordable web solutions today!",
      icon: web_banner,
    },
    path: "Your one stop to all your software development needs",
   cardData :  [
       {
         id: 1,
         className: "capable_service_dev_card_left",
         icon: Capable_service_icon1,
         title: "Requirements Analysis",
         desc: "Our expert will thoroughly understand your business through a meeting or Skype call. Once we grasp your website design needs, we begin the process promptly."
       },
       {
         id: 2,
         className: "capable_service_dev_card_right",
         icon: Capable_service_icon2,
         title: "Design Planning",
         desc: "After consulting with our expert, we’ll generate fresh ideas. Our designers will provide a selection of sample designs to  clarify basic understanding for your website requirements."
       },
       {
         id: 3,
         className: "capable_service_dev_card_left2",
         icon: Capable_service_icon3,
         title: "Development",
         desc: "We’ll move forward once our designers finalize the sample designs. Any additional suggestions or content from the client will also be considered for further process."
       },
       {
         id: 4,
         className: "capable_service_dev_card_center",
         icon: Capable_service_icon4,
         title: "Testing & Launch",
         desc: "We are committed to meeting the promised deadline. After making necessary adjustments based on your feedback, we’ll deliver the finalized website, ensuring it meets your expectations."
       }
     ],
    work_with_us:
      "Our dedicated professionals provide customized web solutions, ensuring timely delivery and ongoing support. We optimize websites for better visibility at competitive prices. With clear communication and regular updates, we offer innovative ideas and creative solutions to enhance your online presence.",
    work_with_us_detail: {
      first: {
        title: "Time-saving",
        series: "01",
        description:
          "With extensive experience, we help you save time and focus on your core business while we handle your website.",
      },
      second: {
        title: "SEO Optimization",
        series: "02",
        description:
          "We build SEO-friendly sites that rank well on search engines and drive traffic to your business.",
      },
      third: {
        title: "Scalable Solutions",
        series: "03",
        description:
          "Our web solutions are built to grow with your business, accommodating future needs easily.",
      },
    },
  },
];

export default web;

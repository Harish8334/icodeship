import lap_icon from "../assets/images/home/service_icon1.png";
import app_icon from "../assets/images/home/service_icon2.png";
import ui_icon from "../assets/images/home/service_icon3.png";
import amc_icon from "../assets/images/home/service_icon4.png";
import servers_icon from "../assets/images/home/service_icon5.png";
import digital_icon from "../assets/images/home/service_icon6.png";
const Services = [
  {
    id : "web-development",
    icon:   lap_icon,
    title: "Web Development",
    description: `Get a high-quality, responsive, and fully optimized website designed
    to elevate your business. Our expert team ensures seamless functionality
    across all devices, enhancing user experience and driving results for your brand.`,
  },
  {
    id: "mobile-app-development",
    icon: app_icon,
    title: "App Development",
    description: `Transform your app idea into a powerful, user-friendly mobile application.
    We build Android and iOS apps tailored to your needs, offering a seamless 
    experience for your customers and increasing engagement.`,
  },
  {
    id:"website-designing",
    icon: ui_icon,
    title: "Ui/Ux Design",
    description: `Design is at the heart of user interaction. Our UI/UX experts create
    intuitive, aesthetic, and user-centric interfaces that deliver smooth and delightful
    digital experiences.  Our expert team ensures seamless functionality
    across all devices.`,
  },
  {
     id:"ecommerce-solutions",
    icon: amc_icon,
    title: "AMC",
    description: `Our Annual Maintenance Contracts ensure your systems run smoothly year-round.
    From updates to bug fixes and monitoring, we take care of your website or application
    so you can focus on your business.`,
  },
  {
    id:"domain-hosting",
    icon: servers_icon,
    title: "Servers & Hosting",
    description: `We provide secure, fast, and reliable server and hosting solutions.
    With 24/7 monitoring, backups, and high uptime, your online presence is always protected.`,
  },
  {
     id:"digital-marketing",
    icon: digital_icon,
    title: "Digital Marketing",
    description: `Maximize your reach and ROI with our digital marketing services.
    From SEO to social media campaigns and paid ads, we grow your brand’s visibility and conversions.`,
  },

];
export default Services;

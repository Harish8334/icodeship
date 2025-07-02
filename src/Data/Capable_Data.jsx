import WebImg from "../assets/images/Capable/capable_web.png";
import MarketingImg from "../assets/images/Capable/capable_dm.png";
import EcommerceImg from "../assets/images/Capable/capable_ecom.png";
import AppImg from "../assets/images/Capable/capable_app.png";
import WebDesign from "../assets/images/Capable/capable_design.png";
import DomainImg from "../assets/images/Capable/capable_domain.png";
import Shape_1 from "../assets/images/Capable/capable_shape1.png";
import Shape_2 from "../assets/images/Capable/capable_shape2.png";
import Shape_3 from "../assets/images/Capable/capable_shape3.png";

export const Services_Data = [
  {
    id: "web-development",
    title: "Website Development",
    description: "Get a high-quality, responsive, and fully optimized website designed to improve your business. Our expert team ensures seamless functionality across all devices, improving user experience and driving results for your brand.",
    image: WebImg,
    imageOdd: Shape_1,
    points: [
      { text: "Website Development", href: "web-dev" },
      { text: "Angular Development", href: "angular" },
      { text: "Custom Website Development", href: "custom-web-dev" },
      { text: "WordPress Development", href: "wordpress-dev" },
      { text: "Web App Development", href: "web-app-dev" }
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "In today's mobile-first world, people focus more on mobile devices than on any other platform. Our technology ensures smooth performance, user-friendly interfaces, and features tailored to your business needs.",
    image: AppImg,
    points: [
      { text: "Android App Development", href: "android-app" },
      { text: "iOS App Development", href: "ios-app" },
      { text: "Mobile App Development", href: "mobile-app" }
    ]
  },
  {
    id: "website-designing",
    title: "Website Designing",
    description: "Combining creativity with technical skills, we design digital experiences that meet users' needs today while anticipating tomorrow's challenges. Our approach ensures flexible, future-ready solutions that adapt to the digital landscape.",
    image: WebDesign,
    imageOdd: Shape_2,
    points: [
      { text: "Website Design", href: "web-design" },
      { text: "Website Redesign", href: "web-redesign" },
      { text: "Corporate Web Design", href: "corpweb-design" },
      { text: "UI UX Designing", href: "uiux-design" },
      { text: "AMP Web Development", href: "amp-web-dev" },
      { text: "Website Update & Maintenance", href: "web-update" }
    ]
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    description: "We create powerful and scalable e-commerce platforms that help you sell more and manage your business better. From product pages to payment systems, we cover everything.",
    image: EcommerceImg,
    points: [
      { text: "Ecommerce Website Development", href: "ecom-web-dev" },
      { text: "Ecommerce Update & Maintenance", href: "ecom-update" },
      { text: "Custom Ecommerce Development", href: "custom-ecom-dev" },
      { text: "Integration Services", href: "integrate-service" }
    ]
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting",
    description: "We provide support for obtaining, setting up, and maintaining servers, ensuring the smooth operation of your online applications 24/7. This allows you to focus on growth while we handle the technical details.",
    image: DomainImg,
    imageOdd: Shape_3,
    points: [
      { text: "Domain Registration", href: "domain-register" },
      { text: "Web Hosting", href: "web-host" },
      { text: "SSL Certificates", href: "ssl-certificate" },
      { text: "Business Emails", href: "business-email" }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Boost your brand’s online presence with expert digital marketing strategies tailored to your business goals. We handle everything from content to analytics for maximum results.",
    image: MarketingImg,
    points: [
      { text: "Search Engine Optimization", href: "seo" },
      { text: "Digital Marketing", href: "dm" },
      { text: "Social Media Optimization", href: "smo" },
      { text: "Social Media Marketing", href: "smm" }
    ]
  }

];

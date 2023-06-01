import { FiMapPin, FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdFax } from "react-icons/md";

import SingleContactSection from "./SingleContactSection";

const ContactUs = () => {
  const ContactSectionApi = [
    {
      id: 1,
      icon: <FiMapPin />,
      name: "Our Main Office",
      address: "Kapasia, Gazipur, Dhaka, Bangladesh",
    },
    {
      id: 2,
      icon: <FiPhone />,
      name: "Phone Number",
      address: "+880 196 3678 826",
    },
    {
      id: 3,
      icon: <MdFax />,
      name: "Fax",
      address: "1- 457-854-75498",
    },
    {
      id: 4,
      icon: <HiOutlineMailOpen />,
      name: "E-Mail",
      address: "sk.sajjad4207@gmail.com",
    },
  ];
  return (
    <div className="">
      <div className=" texts text-center block text-2xl md:text-4xl mt-8 mb-5">
        Contact Us
      </div>
      <div id="contact" className="parentForm ">
        <div className=" contactSections grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto md:max-w-5xl lg:max-w-3xl">
          {ContactSectionApi?.map((item) => (
            <SingleContactSection key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="eMailSection min-h-screen my-bg ">
        <form action="" className=" bg-green-500 flex flex-col ">
          <h3>Get In Touch</h3>
          <input type="text" placeholder="your name" required/>
          <input type="text" placeholder="your name" required/>
          <input type="text" placeholder="your name" required/>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

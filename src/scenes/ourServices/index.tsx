import { SelectedPage, ServiceType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Service from "./service";

const services: Array<ServiceType> = [
  {
    name: "Waste Management Training Services",
    description:
      "We can teach your community or organization on proper management of waste.",
    image: image1,
  },
  {
    name: "Waste Collection Services",
    image: image2,
  },
  {
    name: "Waste Removal Services",
    description:
      "We are there when you need someone to remove all of your unwanted waste in your yard.",
    image: image3,
  },
  {
    name: "Waste Disposal Services",
    description:
      "We have the ability to dispose your waste at legal sites.",
    image: image4,
  },
  {
    name: "RFID Bins And Garbage Bags",
    image: image5,
  },
  {
    name: "Recycling Services",
    description:
      "We collect waste at your home, school or business and we sell these to recycling",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurServices = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourservices" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR SERVICES</HText>
            <p className="py-5">
              We offer a new and out-of-the box waste management service, the first grassroot
              waste management initiative in Zimbabwe sponsored by YHIG and 1MYAC. GEvo-collect 
              Waste Services provide world class solutions to decrease air pollution from burning
              dumps, spread of diseases and sewer blockages. We offer Waste management, Waste
              collection, Waste disposal, Waste removal, RFID Bins and Garbage Bags at affordable rates. 
              All these powered by your local waste pickers!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {services.map((item: ServiceType, index) => (
              <Service
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;

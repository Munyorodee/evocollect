import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Unrivaled efficiency. Unparalleled waste management services. Smart RFID Bins. 
          Timely waste removal and disposal services.. For a clean, metal and plastic 
          clean World. Contact Us now.
          </p>
          <p>© GEvo-collect 2023. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Facebook</p>
          <p className="my-5">Instagram</p>
          <p>LinkedIn</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">You can get in touch with us on the following numbers.</p>
          <p>(0242)123-456</p>
          <p>(0242)789-012</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

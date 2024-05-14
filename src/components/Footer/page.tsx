import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../../assets";

const Footer = () => {
  return (
    <footer className="py-10 md:py-20 px-5 md:px-20">
      <div className="flex md:justify-between md:flex-row  flex-col">
        <div>
          <Link href="/">
            <div className="grid grid-flow-col md:mr-14 mr-0 justify-start md:justify-center">
              <Image
                src={Logo}
                width={30}
                height={30}
                alt="Direct Bridge Limited"
              />
              <span className="font-medium text-xl ml-2 w-full">
                Direct Bridge Limited
              </span>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-14 mt-10 md:mt-0">
          <div className="">
            <div>
              <h1 className="mb-3 md:mb-8 text-lg">About</h1>
            </div>

            <div className="text-[#595959] flex flex-col">
              <Link href={"/"}>
                <span>Features</span>
              </Link>
              <span className="my-2 md:my-4">Pricing</span>
              <Link href={"/"}>
                <span>Our Team</span>
              </Link>
            </div>
          </div>

          <div className="">
            <div>
              <h1 className="mb-3 md:mb-8 text-lg">Legal</h1>
            </div>

            <div className="text-[#595959] flex flex-col">
              <Link href={"/"}>
                <span>Terms of use</span>
              </Link>
              <span className=" my-2 md:my-4">Privacy policy</span>
              <Link href={"/"}>
                <span>Terms of service</span>
              </Link>
            </div>
          </div>

          <div className="">
            <div>
              <h1 className="mb-3 md:mb-8 text-lg">Contact</h1>
            </div>

            <div className="text-[#595959] flex flex-col">
              <span>+234813472940</span>
              <span className="my-4">demo@jobified.com</span>
              <span>support@jobified.com</span>
            </div>
          </div>

          <div className=" ml-0 md:ml-8">
            <div>
              <h1 className="mb-3 md:mb-8 text-lg">Social Media</h1>
            </div>

            <div className="text-[#595959] flex flex-col">
              <span>Twitter</span>
              <span className="my-4">Linkedin</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

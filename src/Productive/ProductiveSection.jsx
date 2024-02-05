import productiveImg from "../assets/illustration-stay-productive.png";
import ArrowIcon from "./ArrowIcon";

function ProductiveSection() {
  return (
    <section id="productive " className="bg-white dark:bg-darkBlue">
      <div className="container mx-auto flex flex-col items-center px-6 pb-32  pt-24 md:flex-row md:space-x-16 ">
        <div className="md:w-1/2">
          <img
            src={productiveImg}
            alt="illustration-stay-productive"
            className="mb-10  "
          />
        </div>
        {/* content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.{" "}
            </p>
          </div>
          {/* link */}
          <div className="mt-4 block">
            <a href="#" className="border-b border-accentCyan text-accentCyan">
              See how Flyo works
              {<ArrowIcon />}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductiveSection;

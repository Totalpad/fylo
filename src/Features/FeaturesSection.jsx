import AccessImg from "./AccessImg";
import CollaborationImg from "./CollaborationImg";
import Item from "./Item";
import SecurityImg from "./SecurityImg";
import FileImg from "./FileImg";

function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 pt-12 dark:bg-darkBlue1 ">
      <div className="container mx-auto px-6 pb-32">
        {/* 1st row container  */}
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* Item 1 */}
          <Item
            image={<AccessImg />}
            header="Access your file from anywhere"
            paragraph="The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere."
          />
          {/* Item 2 */}
          <Item
            image={<SecurityImg />}
            header="Security you can trust"
            paragraph="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. "
          />
        </div>
        {/* 2nd row container  */}
        <div className="mt-24 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          {/* Item 3 */}
          <Item
            image={<CollaborationImg />}
            header="Access your file from anywhere"
            paragraph="The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere."
          />
          {/* Item 4*/}
          <Item
            image={<FileImg />}
            header="Security you can trust"
            paragraph="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. "
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

import quote from "../assets/bg-quotes.png";

import profile1 from "../assets/profile-1.jpg";
import profile2 from "../assets/profile-2.jpg";
import profile3 from "../assets/profile-3.jpg";
import BoxItems from "./BoxItems";

function TestimonialsSections() {
  return (
    <section id="testimonials" className=" bg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pb-80 pt-12 md:pb-96">
        {/* Boxes container */}
        <div className="container relative flex w-full flex-col space-y-6 md:flex-row md:space-x-12 md:space-y-0">
          {/* quote image  */}
          <img
            src={quote}
            alt="quote"
            className="absolute -top-2 left-1 w-10 md:-top-16 md:w-20"
          />

          {/* box 1  */}
          <BoxItems
            name="Satish Patel"
            position="Founder & CEO. Huddle"
            img={profile1}
          />
          {/* box 2  */}
          <BoxItems
            name="Bruce McKenzie"
            position="Founder & CEO. Huddle 2"
            img={profile2}
          />
          {/* box 3  */}
          <BoxItems
            name="Eva Boyd"
            position="Founder & CEO. Huddle 3"
            img={profile3}
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSections;

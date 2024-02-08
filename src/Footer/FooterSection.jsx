import PhoneSvg from "./PhoneSvg";
import EmailSvg from "./EmailSvg";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Instagram from "./Instagram";

function FooterSection() {
  return (
    <footer className="bg-darkBlue2 pt-10 text-white">
      <div className="container mx-auto px-5 pb-10">
        <div className="flex flex-col justify-between  space-y-24 md:flex-row md:space-y-0">
          {/* email & phone  */}
          <div className=" space-y-6">
            <div className="flex items-center gap-4">
              <PhoneSvg />
              <p>+1-543-123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <EmailSvg />
              <p>example@fylo.com</p>
            </div>
          </div>

          {/* Menus */}
          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base ">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center space-x-3 pb-10">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;

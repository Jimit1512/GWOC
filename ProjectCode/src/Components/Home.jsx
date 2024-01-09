import { Link, animateScroll as scroll } from "react-scroll";
import { Menu } from "lucide-react";

function Home({ onSignup, onModal }) {
  return (
    <>
      <div className="hidden navbar bg-black h-[50px] w-[90%] mx-4 mt-3 rounded-xl fixed z-30 md:flex justify-between px-4 ">
        <ul className="  text-white flex gap-3">
          <li>
            <Link
              className="cursor-pointer  hover:text-[#50D888]"
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-[#50D888]"
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-[#50D888]"
              to="achievements"
              smooth={true}
              duration={500}
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-[#50D888]"
              to="demos"
              smooth={true}
              duration={500}
            >
              Demos
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-[#50D888]"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button onClick={onModal}>
          <img
            alt="Tailwind CSS Navbar component"
            className="w-10 rounded-full"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </button>
      </div>

      <div className="navbar bg-base-100 fixed z-50 md:hidden">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
            <Link
              className="cursor-pointer "
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer "
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer "
              to="achievements"
              smooth={true}
              duration={500}
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer "
              to="demos"
              smooth={true}
              duration={500}
            >
              Demos
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer "
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
      </ul>
    </div>
  </div>
</div>

      <div
        className="hero min-h-screen bg-[#1e1e1e] flex flex-col md:items-center md:justify-center pb-2"
        id="home"
      >
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Getting Best Quality{" "}
              <span className=" text-[#50D888]">Education</span> Is Now Easier
            </h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <img
            src="https://i0.wp.com/milestonetask.com/wp-content/uploads/2023/10/Teacher-student-pana.png?ssl=1"
            className=" max-w-s md:max-w-sm rounded-lg"
          />
        </div>

        <div className="indicator md:absolute md:left-[10%] md:top-[80%]">
          <span className="indicator-item ">
          
            <button className="btn bg-[#50D888] " onClick={onSignup}>
              Sign up
            </button>
          </span>
          <div className="grid w-48 md:w-52 place-items-center">
           <img src="https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/pattern.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

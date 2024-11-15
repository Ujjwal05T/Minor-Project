import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/blog_1587144918.jpg";


function Home() {

  const recruiters = [
    "https://www.spmcollege.ac.in/images/logos/Amazon.png",
    "https://www.spmcollege.ac.in/images/logos/birla.png",
    "https://www.spmcollege.ac.in/images/logos/deloitte.png",
    "https://www.spmcollege.ac.in/images/logos/tata.png",
    "https://www.spmcollege.ac.in/images/logos/wipro.png",
    "https://www.spmcollege.ac.in/images/logos/infosys.png",
    "https://www.spmcollege.ac.in/images/logos/reliance-trends.png",
    "https://www.spmcollege.ac.in/images/logos/larsen-tourbro.png",
    "https://www.spmcollege.ac.in/images/logos/dxc.png",
    "https://www.spmcollege.ac.in/images/logos/accenture.png"
  ];

  return (
    <>
      <div className="hidden md:block m-2 p-2">
        <Link to="/register">
          <button className="btn">Register/Login</button>
        </Link>
      </div>
      <div className="text-center font-semibold text-2xl mt-6  space-x-4 relative md:-top-[70px]">
        <h1>Welcome to SOC Placement Portal</h1>
      </div>
      <div className="flex flex-col md:flex-row  justify-center md:space-x-3 my-5 md:my-0 md:justify-between px-2 md:px-5">
       

        <img src={img} alt="" className="w-[90%] md:w-[50%] ml-4 lg:ml-0"/>
        <div className="flex items-center">
          
        
        <div className="space-y-4 mx-2">
          <h1 className="text-center mt-5 md:mt-0 font-bold text-xl">About the institute</h1>         
          <p>
            School of Computer Science was established in the year 1995 with a
            three-year full-time course in Bachelor of Computer Applications
            course affiliated to DAVV Indore (MP). The college is among the top
            ten BCA colleges in the state, situated in the educational hub (i.e.
            Indore ) of MP state. In recent years, there has been an increasing
            demand for BCA graduates from all corners of India. On account of
            rapid growth in the industry & services sector, the employment
            opportunities for young graduates who have undertaken computer
            education are bright. The persons already employed are also aspiring
            for BCA education to make growth in their career in terms of higher
            responsibilities and monetary benefits. 
          </p>
        </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-8">
            <h1 className="font-semibold text-2xl">Our Recruiters</h1>
            <div className="flex flex-wrap justify-center md:justify-evenly font-semibold text-2xl mt-4 mb-16 space-x-4 space-y-6 mx-4 lg:mx-[100px]">
              <div className="hidden">   
              </div>
            {recruiters.map((src, index) => (
              <img key={index} src={src} alt={`Recruiter ${index + 1}`} className="bg-white shadow-lg rounded p-2" />
            ))}
          </div>
        </div>
        
        
      </div>
      <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
      <div className="mt-2 mb-2 md:mb-4 mx-6 space-y-2">
        <h1 className="font-semibold text-2xl">Contact Us</h1>
        <h3 className="text-lg text-gray-400">School Of Computers. IPS Academy Knowledge Village, Rajendra Nagar A.B. Road, Indore-452012.</h3>
        <h2>Email : office.soc@ipsacademy.org</h2>
        <h2>Telephone: +0731-4014858 , 859</h2>
        <div className="text-center mt-4 md:mb-4">
        <p className="text-sm text-gray-500">&copy; Ujjwal Tamrakar and Shubham Soni</p>
      </div>
      </div>
    </>
  );
}

export default Home;

import ThirdCard from "../reUse/ThirdCard";
import SecondCard from "../reUse/SecondCard";
import Welcome from "../reUse/Welcome";
import FourthCard from "../reUse/FourthCard";
import FifthCard from "../reUse/FifthCard";
import SixthCard from "../reUse/SixthCard";
import SeventhCard from "../reUse/SeventhCard";
import LandingPageHeader from "../components/static/LandingpageHeader";



const LandingPage = () => {

  return (
    <div
    className="w-full h-[100%] "
    style={{
      background:"rgba(179, 184, 231, 0.25)",
      boxShadow:" 0 8px 32px 0 rgba( 31, 38, 135, 0.37  )",
      backdropFilter:"blur( 4px )",
      WebkitBackdropFilter:" blur( 4px )",
    }}
    >
      <LandingPageHeader/>
  
  <div className="w-[100%] mt-[40px] small:mt-[30px] flex justify-center  ">
   <Welcome/>
   </div>
  <div className="w-[100%] mt-[40px]  flex justify-center  ">
   <ThirdCard/>
       </div>
 <div className="w-[100%] mt-[10px] flex justify-center  ">
   <SecondCard/>
       </div> 
       {/* <div className="w-[100%] mt-[40px] flex justify-center  ">
   <FourthCard/>
      </div>  */}
      <div className="w-[100%] mt-[50px]    ">
   <SixthCard/>
      </div> 
      <div className="w-[100%] mt-[40px] ">
   <SeventhCard/>
      </div> 
       <div className="w-[100%] mt-[50px]  ">
   <FifthCard/>
      </div> 
      
    
       {/* <div className="w-[100%] mt-[40px] flex justify-center  ">
   <GridCard/>
      </div>  */}
  </div>
  );
};

export default LandingPage;


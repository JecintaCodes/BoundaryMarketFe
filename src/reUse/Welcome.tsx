import { Link } from "react-router-dom"


const Welcome = () => {
  return (
    <div className="mt-[50px] small:w-[100%] mobile:mt-[200px] small:mt-[300px] ">
     <div  
     >
     <div
     className=" h-[400px] small:w-[100%] mt-[30px] flex justify-between items-center mobile:flex-col-reverse text-[30px] small:flex-col-reverse ">
       <div
       className="w-[45%] h-[400px] small:hidden mobile:hidden small:w-[100%]  ">
       <img
        className="w-[100%] object-cover rounded h-[100%]  "
        src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="pinimg" />
       </div>

        <div 
        className="w-[50%] small:w-[100%] rounded-sm mobile:mt-[500px] mobile:w-[100%]    ">
        <div 
        className=" text-center font-bold text-[18px] mt-[-5px] mr-[230px] small:w-[100%] mobile:w-[100%] small:mt-[20px] ">Welcome to Boundary Markert</div>
            <div         
            className=" small:w-[100%] small:mr-[0px] small:ml-[20px] mr-5 text-[15px] mobile:ml-[20px] mobile:mr-[5px] font-normal mt-[20px] mobile:text-center mobile:w-[100%] small:mt-[-px] ">
            Your premier online destination for affordable buying and selling. Connect with a vibrant community of shoppers and sellers, and discover a world of possibilities. Buy with confidence, sell with ease, and experience the thrill of boundary-less commerce.
            
            Explore, shop, and thrive with us!"
            .</div>
           <div className="flex justify-between mr-5 small:flex-row-reverse mobile:justify-center mobile:items-center mobile:gap-1 mobile:mr-[0px]   small:mt-[20px] mobile:flex-wrap ">
           <div className="h-[100px] w-[300px] flex items-center   ">
                <div className="w-[25%] ">
                    <img 
                    className="w-[100%] object-cover "
                    src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="pinimg" />
                </div>
                <div className="w-[75%] small:mr-[20px] ">
                    <div className="text-[13px] font-bold ">Lorem ipsum dolor </div>
                    <div className=" text-[11px] mt-[10px] font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis.</div>
                </div>
            </div>
            <div className="h-[100px] w-[300px] flex items-center  ">
                <div className="w-[25%] ">
                    <img 
                    className="w-[100%] object-cover "
                    src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="pinimg" />
                </div>
                <div className="w-[75%] ">
                    <div className="text-[13px] font-bold ">Lorem ipsum dolor </div>
                    <div className=" text-[11px] mt-[10px] font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis.</div>
                </div>
            </div>
           </div>
           <div className="flex justify-between mobile:flex-wrap-reverse mr-5 mobile:justify-center small:mr-[0px] small:mt-[20px]  ">
           <div className="h-[100px] w-[300px] flex items-center  ">
                <div className="w-[25%] ">
                    <img 
                    className="w-[100%] object-cover "
                    src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="pinimg" />
                </div>
                <div className="w-[75%] ">
                    <div className="text-[13px] font-bold ">Lorem ipsum dolor </div>
                    <div className=" text-[11px] mt-[10px] font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis.</div>
                </div>
            </div>
            <div className="h-[100px] w-[300px] flex items-center  ">
                <div className="w-[25%] ">
                    <img 
                    className="w-[100%] object-cover "
                    src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="pinimg" />
                </div>
                <div className="w-[75%] ">
                    <div className="text-[13px] font-bold ">Lorem ipsum dolor </div>
                    <div className=" text-[11px] mt-[10px] font-light  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis.</div>
                </div>
            </div>
           </div>
         <Link to="/sign-in">
         <button className=" mobile:mt-[30px] p-[7px] w-[130px] small:ml-[100px] small:mt-[15px] h-[40px] text-[12px] font-bold bg-[#fa9608] text-[white] rounded mobile:ml-[220px] hover:scale-[1.05] transition-all duration-700 outline-none ">Super, Quality.</button>
         </Link>
         </div>
        </div>
       </div>
    </div>
  )
}

export default Welcome
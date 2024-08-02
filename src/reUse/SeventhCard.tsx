
const SeventhCard = () => {
  return (
    <div
    className="mt-[70px] ">
        <div className="w-[100%] small:w-[100%] mobile:w-[100%] h-[500px] small:h-[700px] flex justify-center small:flex-col mobile:flex-col  ">
            <div className="w-[45%] mr-[30px] small:h-[50%] mobile:h-[50%] small:w-[100%] h-[100%] overflow-hidden mobile:w-[100%]  ">
                <img
                className="w-[100%] h-[100%] object-cover hover:scale-[1.05] cursor-pointer transition-all duration-700 "
                src="https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg" alt="pinimg" />
            </div>
            <div className=" w-[50%] small:w-[100%] small:h-[50%] mobile:h-[50%] mobile:w-[100%] h-[100%] ">
                <div className="text-[25px] small:text-[15px] mobile:text-[15px] font-bold small:ml-[30px] w-[100%]  mt-[50px] mobile:w-[100%] small:mt-[20px] mobile:mt-[30px] ">We Offer You The Best Quality Services</div>
                <div className=" mobile:ml-[10px] text-[#a6a5a5] mt-[20px] text-[15px] font-medium small:w-[100%] mobile:w-[100%] small:text-[12px] mobile:text-[12px] mobile:text-center ">Experience the best of the best with us! We're committed to delivering top-notch quality that exceeds your expectations. Our dedication to excellence ensures that you receive only the finest products and services, tailored to meet your unique needs. Trust us to provide you with the exceptional quality you deserve, every time</div> 
                <div className="mt-[20px] small:mt-[10px]  ">
                    <div className=" flex gap-[20px] justify-center ">
                        <input className="bg-[#fa9608]" type="checkbox" checked />
                        <div className="font-semibold text-[16px] small:text-[16px] mobile:text-[13px] ">Start shopping smarter at Boundary Market - where affordability meets opportunity </div>
                    </div>
                    <div className=" flex gap-[20px] mt-[20px] justify-center ">
                        <input className="bg-[#fa9608]" type="checkbox" checked />
                        <div className="font-semibold small:text-[16px] mobile:text-[13px]  text-[16px] ">Buy, sell, and connect at Boundary Market - your gateway to limitless commerce </div>
                    </div>
                    <div className=" flex gap-[20px] mt-[20px] justify-center ">
                        <input type="checkbox" className="bg-[#fa9608]" checked />
                        <div className="font-semibold small:text-[16px] mobile:text-[13px]  text-[16px] ">Experience the future of ecommerce at Boundary Market - where everyone can thrive </div>
                    </div>
                    {/* <div className="flex gap-[20px] mt-[20px] justify-center">
  <input 
    type="checkbox" 
    className="bg-[#fa9608] hover:bg-[#fa9608] checked:bg-[#34C759] checked:hover:bg-[#34C759] transition-all duration-500" 
    // {...register('terms')} 
    checked 
  />
  <div className="font-semibold small:text-[16px] mobile:text-[13px] text-[16px]">
    Experience the future of ecommerce at Boundary Market - where everyone can thrive
  </div>
</div> */}


                </div>
                <div className="flex justify-center items-center mt-[30px] w-[150px] small:w-[100px] small:p-[10px] p-[20px] text-[13px] gap-1 bg-[#fa9608] h-[50px] text-white rounded hover:scale-[1.05] duration-700 cursor-pointer ml-[50px] mobile:w-[100px] mobile:p-[10px] mobile:mt-[15px] ">
                    <button>Read More</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SeventhCard
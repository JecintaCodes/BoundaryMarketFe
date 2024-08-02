const SixthCard = () => {
  return (
    <div>
      <div className="w-[100%] mt-[100px] mobile:w-[100%] small:w-[100%] small:h-[400px] mobile:h-[400px] h-[700px] p-[50px] small:p-[20px] mobile:p-[20px] bg-[#456104] ">
        <div className="text-center font-semibold text-[white] text-[18px] small:text-center mobile:text-center mobile:text-[14px] small:text-[14px]  ">
          Featured Services
        </div>
        <div className="w-[100%] text-center text-[13px] font-[medium] mt-[30px] text-[#a8a5a5] mobile:mt-[0px] small:w-[100%] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil culpa
          deleniti facilis ab unde ex quos quae repudiandae dolore reiciendis
          maxime sunt{" "}
        </div>

        {/* box */}
        <div className="w-[100%] small:mt-[25px] mobile:mt-[10px] mt-[70px] p-1 ">
          <div className=" flex gap-[20px] justify-center ">
            <div className="w-[200px] small:w-[250px] cursor-pointer hover:scale-[1.05] duration-700 transition-all h-[210px] bg-white rounded mobile:p-[0px] ">
              <div className="text-[15px] text-center font-bold small:p-[0] small:text-[10px] small:w-[100%] small:font-medium p-2 text-[#fa9608] mobile:w-[100%] mobile:p-[0px] mobile:font-medium mobile:text-[10px]  ">
                Lorem, ipsum dolor.
              </div>
              <div className="font-[medium] text-[13px] text-center small:text-[9px] small:w-[100%] mobile:w-[100%] mobile:text-[9px] mobile:mt-[2px] ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                necessitatibus voluptatem dolores repellat eos quo accusantium
                recusandae et praesentium quaerat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facere, ex.
              </div>
            </div>
            <div className="w-[200px] small:w-[250px]  cursor-pointer hover:scale-[1.05] duration-700 transition-all h-[210px] bg-white rounded ">
              <div className="text-[15px] text-center font-bold p-2 text-[#456104] small:p-[0] small:text-[10px] small:w-[100%] small:font-medium mobile:w-[100%] mobile:p-[0px] mobile:font-medium mobile:text-[10px]  ">
                Lorem, ipsum dolor.
              </div>
              <div className="font-[medium] text-[13px] text-center small:text-[9px] small:w-[100%] mobile:w-[100%] mobile:text-[9px] mobile:mt-[2px]  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                necessitatibus voluptatem dolores repellat eos quo accusantium
                recusandae et praesentium quaerat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facere, ex.
              </div>
            </div>
            <div className="w-[200px] small:w-[250px] h-[210px] cursor-pointer hover:scale-[1.05] duration-700 transition-all bg-white rounded small:p-[0] small:text-[10px] small:font-medium ">
              <div className="text-[15px] text-center font-bold p-2 text-[#fa9608] small:p-[0] small:text-[10px] small:w-[100%] small:font-medium mobile:w-[100%] mobile:p-[0px] mobile:font-medium mobile:text-[10px] ">
                Lorem, ipsum dolor.
              </div>
              <div className="font-[medium] text-[13px] text-center small:text-[9px] mobile:w-[100%] mobile:text-[9px] mobile:mt-[2px] small:w-[100%]  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                necessitatibus voluptatem dolores repellat eos quo accusantium
                recusandae et praesentium quaerat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facere, ex.
              </div>
            </div>
          </div>
          <div className="flex mt-[40px] gap-[20px] justify-center small:hidden mobile:hidden ">
            <div className="w-[200px] h-[200px] cursor-pointer hover:scale-[1.05] duration-700 transition-all bg-white rounded ">
              <div className="text-[15px] text-center font-bold p-2 text-[#456104] ">
                Lorem, ipsum dolor.
              </div>
              <div className="font-[medium] text-[13px] text-center ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                necessitatibus voluptatem dolores repellat eos quo accusantium
                recusandae et praesentium quaerat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facere, ex.
              </div>
            </div>
            <div className="w-[200px] cursor-pointer hover:scale-[1.05] duration-700 transition-all h-[200px] bg-white rounded ">
              <div className="text-[15px] text-center font-bold p-2 text-[#fa9608]  ">
                Lorem, ipsum dolor.
              </div>
              <div className="font-[medium] text-[13px] text-center ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                necessitatibus voluptatem dolores repellat eos quo accusantium
                recusandae et praesentium quaerat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facere, ex.
              </div>
            </div>
            <div className="w-[200px] h-[200px] cursor-pointer hover:scale-[1.05] duration-700 transition-all bg-white rounded ">
              <div className="text-[15px] text-center font-bold p-2 text-[#456104] ">
                Lorem, ipsum dolor.
              </div>
              <div className="font-[medium] text-[13px] text-center small:text-[9px] small:w-[100%]  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                necessitatibus voluptatem dolores repellat eos quo accusantium
                recusandae et praesentium quaerat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facere, ex.
              </div>
            </div>
          </div>
        </div>
        {/*end box */}
      </div>
    </div>
  );
};

export default SixthCard;

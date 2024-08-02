
import { Link } from "react-router-dom"


const ThirdCard = () => {

    const data = [
        {
        image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
        title:"Lorem ipsum dolor sit.",
        details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ad fugit id natus maiores quibusdam reiciendis laboriosam quis delectus,",
        butt:"Purchase",
        },
        {
        image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
        title:"Lorem ipsum dolor sit.",
        details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ad fugit id natus maiores quibusdam reiciendis laboriosam quis delectus,",
        butt:"Purchase",
        },
        {
        image:`https://i.pinimg.com/originals/f7/e9/87/f7e987b4ca06764cc3b834689da56502.jpg`,
        title:"Lorem ipsum dolor sit.",
        details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ad fugit id natus maiores quibusdam reiciendis laboriosam quis delectus,",
        butt:"Purchase",
        },

    ]

  return (
    <div
    className=" flex gap-[20px] small:flex small:justify-center small:items-center small:flex-wrap mobile:flex-wrap small:w-[100%] small:mt-[-70px] mobile:mt-[-10px]  ">
        {
             data?.map((props:any)=>{
                return(
                    <div
                    className=" h-[350px] tablet:w-[170px] bg-[#fa9608] w-[200px] rounded overflow-hidden small:h-[450px] small:w-[40%] mobile:h-[400px] mobile:w-[45%] mt-[40px] small:mt-[0] mobile:mt-[0] ">
            <img 
            className="w-[100%] h-[55%] object-cover rounded hover:scale-[1.05] hover:cursor-pointer transition-all duration-700  "
            src={props?.image} alt="pinimg" />
            <div className=" mt-[5px] ">
                <div className="text-[15px] font-bold text-center ">{props?.title}</div>
                <center>
                    <div className="w-[100%] text-[12px] mt-[5px] ">{props?.details} </div>
                   <Link to="/sign-up">
                   <button className="mt-[5px] h-[35px] p-[10px]  rounded-[30px] text-[10px] outline-none font-bold text-[white] hover:scale-[1.05] bg-[#456104]  hover:cursor-pointer transition-all duration-700 "
                
                   >{props?.butt}</button>
                   </Link>
                </center>
            </div>
        </div>
)
             })
            
        }
    </div>
  )
}

export default ThirdCard
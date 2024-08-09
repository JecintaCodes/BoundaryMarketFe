import GeneralChart from "./GeneralChart"

const charm = () => {
    const label = ['January', 'February', 'March'];
    const data = [10, 20, 30];
  
  return (
    <div>
        <GeneralChart labels={label} data={data} />
    </div>
  )
}

export default charm
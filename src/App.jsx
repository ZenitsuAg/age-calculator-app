import { useState } from 'react'
import Input from './Components/Input'
import arrowIcon from './../assets/images/icon-arrow.svg';


function App() {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  function handleYears(e) {
    setYears(e.target.value)
  }

  function handleMonths(e) {
    setMonths(e.target.value)
  }

  function handleDays(e) {
    setDays(e.target.value)
  }

  return (
    <main className='bg-off-white h-screen p-3 '>
       <div className='font-Poppins max-w-[375px] mx-auto bg-white rounded-2xl rounded-br-[100px] p-6 pt-11 mt-20'>
        <div className="flex flex-row max-w-[300px] gap-3 mx-auto ">
            <Input value={'Day'} onChange={handleDays} placeholder={'DD'} />
            <Input value={'Month'} onChange={handleMonths} placeholder={'MM'} />
            <Input value={'Year'} onChange={handleYears} placeholder={'YYYY'} />
        </div>

        <div className='relative bottom-2 my-10'>
          <div className='pt-6'>
            <hr/>
          </div>
          <div className='left-[7.5rem] top-0 absolute'>
            <img src={arrowIcon} alt="arrow icon" className='bg-purple rounded-full mx-auto p-3 w-12 h-12'/>
          </div>
        </div>
        
        <h1 className='text-5xl italic font-bold'><span className="text-purple">--</span> years</h1>
        <h1 className='text-5xl italic font-bold'><span className="text-purple">--</span> months</h1>
        <h1 className='text-5xl italic font-bold'><span className="text-purple">--</span> days</h1>

      </div>
    </main>
  )
}

export default App

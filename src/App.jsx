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
    <main className='h-screen p-3 bg-off-white'>
       <div className='font-Poppins max-w-[375px] mx-auto bg-white rounded-2xl rounded-br-[100px] p-6 pt-11 mt-20 md:max-w-[570px] md:p-10'>
        <div className="flex flex-row max-w-[300px] gap-3 mx-auto md:mx-0 md:max-w-[390px]">
            <Input value={'Day'} onChange={handleDays} placeholder={'DD'} />
            <Input value={'Month'} onChange={handleMonths} placeholder={'MM'} />
            <Input value={'Year'} onChange={handleYears} placeholder={'YYYY'} />
        </div>

        <div className='relative my-10 md:mt-0'>
          <div className='pt-8'>
            <hr/>
          </div>
          <div className='absolute top-0 left-0 right-0 text-center md:left-auto md:text-left'>
            <button className='w-12 h-12 p-8 mx-auto bg-center bg-no-repeat rounded-full md:h-16 md:w-16 bg-purple bg-arrow-icon'></button>
          </div>
        </div>
        
        <h1 className='text-5xl italic font-bold leading-tight md:text-6xl'><span className="text-purple">--</span> years</h1>
        <h1 className='text-5xl italic font-bold leading-tight md:text-6xl'><span className="text-purple">--</span> months</h1>
        <h1 className='text-5xl italic font-bold leading-tight md:text-6xl'><span className="text-purple">--</span> days</h1>

      </div>
    </main>
  )
}

export default App

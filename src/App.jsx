

import Header from './components/Header'
import Overview from './components/Overview'
import './global.css'

function App() {


  return (
    <div className='APP_CONTAINER w-full h-screen flex flex-col gap-5 bg-[rgb(250,250,250)]'>
      <Header />

      <div className='flex gap-[20px]'>
        <Overview heading='Online Orders' number='231'  />
        <Overview heading='Online Orders' number='₹23,92,312.19' />
      </div>
    </div>
  )
}

export default App

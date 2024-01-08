

import Header from './components/Header'
import OverviewSection from './components/Overview'
import './global.css'

function App() {


  return (
    <div className='APP_CONTAINER w-full h-screen flex flex-col gap-5 bg-[rgb(250,250,250)]'>
      <Header />
      <OverviewSection />
     
    </div>
  )
}

export default App

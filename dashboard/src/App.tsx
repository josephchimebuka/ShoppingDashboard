
import './App.css'
import {TooltipComponent, Position,} from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar,Sidebar,ThemeSetting, } from './components'
import Ecommerce from './pages/Ecommerce';
function App() {
  const position: Position = 'top' as Position;
  const activeMenu = true
  return (
    <>
      
     <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
      <TooltipComponent content='Settings' position={position}>
      <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius: '50%'}}><FiSettings/></button>
      </TooltipComponent>
        </div>

      {
        activeMenu ?(
          <div className='w-72 fixed dark:bg-secondary-dark-bg'>
            <Sidebar/>
          </div>
        ):(
          <div className='dark:bg-main-dark-bg '>
        <Sidebar/>
          </div>
        )
      }

      <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className='fixed md:static bg-main-bg w-full'>
           <Navbar/>
          </div>
      </div>

      <Routes>
        <Route path='/' element={<Ecommerce/>}/>
        <Route path='/ecommerce' element={<Ecommerce/>}/>

        {/* pages */}
        <Route path='/orders' element={<Ecommerce/>}/>
        <Route path='/employees' element={<Ecommerce/>}/>
        <Route path='/customers' element={<Ecommerce/>}/>

        {/* Apps */}
        <Route path='/kanban' element={<Ecommerce/>}/>
        <Route path='/editor' element={<Ecommerce/>}/>
        <Route path='/calenders' element={<Ecommerce/>}/>
        <Route path='/color-pickers' element={<Ecommerce/>}/>

            {/* charts */}
        <Route path='/line' element={<Ecommerce/>}/>
        <Route path='/pyramid' element={<Ecommerce/>}/>
        <Route path='/area' element={<Ecommerce/>}/>
        <Route path='/bar' element={<Ecommerce/>}/>
        <Route path='/pie' element={<Ecommerce/>}/>
        <Route path='/financial' element={<Ecommerce/>}/>
        <Route path='/color-mapping' element={<Ecommerce/>}/>
        <Route path='/stacked' element={<Ecommerce/>}/>
      </Routes>
      </div>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App

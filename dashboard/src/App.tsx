
import './App.css'
import {TooltipComponent, Position,} from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
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
            Sidebar
          </div>
        ):(
          <div className='dark:bg-main-dark-bg '>
            no sidebar
          </div>
        )
      }

      <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className='fixed md:static bg-main-bg w-full'>
              Navbar
          </div>
      </div>

      <Routes>
        <Route path='/' element='ecommerce page'/>
        <Route path='/ecommerce' element='ecommerce page'/>

        {/* pages */}
        <Route path='/orders' element='ecommerce page'/>
        <Route path='/employees' element='ecommerce page'/>
        <Route path='/customers' element='ecommerce page'/>

        {/* Apps */}
        <Route path='/kanban' element='ecommerce page'/>
        <Route path='/editor' element='ecommerce page'/>
        <Route path='/calenders' element='ecommerce page'/>
        <Route path='/color-pickers' element='ecommerce page'/>

            {/* charts */}
        <Route path='/line' element='ecommerce page'/>
        <Route path='/pyramid' element='ecommerce page'/>
        <Route path='/area' element='ecommerce page'/>
        <Route path='/bar' element='ecommerce page'/>
        <Route path='/pie' element='ecommerce page'/>
        <Route path='/financial' element='ecommerce page'/>
        <Route path='/color-mapping' element='ecommerce page'/>
        <Route path='/stacked' element='ecommerce page'/>
      </Routes>
      </div>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App

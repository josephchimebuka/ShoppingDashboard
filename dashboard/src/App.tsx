
import './App.css'
import {TooltipComponent, Position,} from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'
import {BrowserRouter} from 'react-router-dom'
function App() {
  const position: Position = 'top' as Position;
  return (
    <>
      
     <div>
      <TooltipComponent content='Settings' position={position}>
      <button><FiSettings/></button>
      </TooltipComponent>
      <h1 className='text-black'>Hello</h1>
     </div>
    </>
  )
}

export default App

import { Link, NavLink } from "react-router-dom"
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
const Sidebar = () => {
  const activeMenu = true
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray  text-md m-2'
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto
     md:hover:overflow-auto pb-10">
        {
          activeMenu &&(
            <><div className="flex justify-between items-center">
                <Link to='/' className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                  <SiShopware/> <span>ShopStores</span>
                </Link>
                <TooltipComponent content='menu'>
                    <button className="p-3 text-xl rounded-full hover:bg-light-gray md:hidden">
                      <MdOutlineCancel/>
                    </button>
                </TooltipComponent>
            </div>

            <div>
            {links.map((item)=>(
              <div  key={item.title}>
            <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
            {item.links.map((link)=>(
              <NavLink 
              to={`/${link.name}`}
              className={({isActive}) => isActive ? activeLink :  normalLink}
              >{link.icon}
              <span>{link.name}</span></NavLink>
            ))}
              </div>
            ))}
            </div>
            </>
          )
        }
      </div>
  )
}

export default Sidebar
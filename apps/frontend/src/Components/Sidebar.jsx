import {
     ChevronLast,
     ChevronFirst,
     Menu,
     EllipsisVertical,
} from 'lucide-react';
import { useContext, createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AuthButton from './AuthButton';
import logo from '../../assets/Images/logo.svg';
const SidebarContext = createContext();

export default function Sidebar({ children }) {
     const [expanded, setExpanded] = useState(true);
     const [showSidebar, setShowSidebar] = useState(false);

     const token = localStorage.getItem('token');

     return (   
          <div>
               <aside
                    className={`h-screen fixed top-0 w-fit rounded-e-xl backdrop-blur-xl border-r shadow-sm transition-transform transform ${
                         showSidebar
                              ? 'translate-x-0'
                              : '-translate-x-full'
                    } md:translate-x-0`}
               >
                    <nav className="pt-20 h-full w-fit flex flex-col">
                         <div className="p-4 pb-2 flex justify-center md:justify-between items-center">
                              <img
                                   src={logo}
                                   className={`bg-white overflow-hidden rounded-full w-16 transition-all ${
                                        expanded ? 'w-32' : 'w-0'
                                   }`}
                                   alt="LURN_Logo"
                              />
                         </div>

                         <SidebarContext.Provider
                              value={{
                                   expanded,
                                   setShowSidebar,
                              }}
                         >
                              <ul className="flex flex-col items-center px-3 h-full">
                                   {children}
                              </ul>
                         </SidebarContext.Provider>

                         <div className="h-[100px] sticky bottom-0 border-white border-t p-3 flex justify-center  md:justify-between">
                              <div
                                   className={`
          flex justify-center items-center text-center
          md:justify-normal md:text-left
          overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
     `}
                              >
                                   <AuthButton />
                              </div>
                         </div>
                    </nav>
               </aside>
               <div className="w-full h-[60px]  top-0 right-0 md:hidden flex items-center  shadow-lg z-50 bg-transparent fixed">
               <button 
                    onClick={() => {
                         setShowSidebar((curr) => !curr);
                    }}
                    className="fixed md:hidden p-2 border-white border ml-2 rounded-lg shadow-lg z-50"
               >
                    <Menu size={24} stroke="white" />
               </button>
               </div>
          </div>
     );
}

export function SidebarItem({ icon, text, goToPage }) {
     const { expanded, setShowSidebar } = useContext(SidebarContext);
     const location = useLocation();

     const navigate = useNavigate('/dashboard');

     const active = location.pathname===("/"+goToPage);

     function onClickHandler() {
          setShowSidebar(false);
          navigate(goToPage);
     }

     return (
          <li
               onClick={onClickHandler}
               className={`
        relative flex justify-center text-center py-2 px-3 my-1
        md:justify-normal md:text-left 
        font-medium rounded-md cursor-pointer
        transition-colors group

        ${
             active
                  ? ' shadow-black shadow-md text-indigo-500'
                  : 'hover:shadow-black shadow-md text-indigo-700'
        }
    `}
          >
               {icon}
               <span
                    className={`overflow-hidden transition-all ${
                         expanded ? 'w-32 ml-3' : 'w-0'
                    }`}
               >
                    {text}
               </span>
               {!expanded && (
                    <div
                         className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                    >
                         {text}
                    </div>
               )}
          </li>
     );
}

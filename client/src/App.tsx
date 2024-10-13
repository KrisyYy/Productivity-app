import { Sidebar } from './components/common/Sidebar';
import { Content } from './components/common/Content';
import { NavBar } from './components/common/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [expanded, setExpanded] = useState(localStorage.getItem("sidebar_expand") !== null);

    const handleExpand = () => {
        if (!expanded) {
            localStorage.setItem("sidebar_expand", "");
            setExpanded(true);
        }
        else {
            localStorage.removeItem("sidebar_expand");
            setExpanded(false);
        }
    }

  return (
    <div className='h-screen flex flex-row items-stretch'>
    	<div onClick={handleExpand} className="icon-box fixed left-0 bottom-0 z-10 m-2 mb-4
                                   rounded-3xl dark-bg-hover cursor-pointer">
        	<FontAwesomeIcon className='icon' icon={faBars} />
        </div>
      	<Sidebar expanded={expanded}/>
      	<div className={'w-full transition-all ease-linear origin-left duration-100 ' + (expanded ? "ml-16" : "ml-48")}>
        	<NavBar/>
          	<Content/>
      	</div>
    </div>
  );
}

export default App;

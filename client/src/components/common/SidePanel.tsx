import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export const SidePanel = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 py-3 
                        flex flex-col justify-between 
                        bg-slate-800 shadow">
            <div>
                <Link className='sidebar-icon-box' to={"/"}>
                    <FontAwesomeIcon className='sidebar-icon' icon={icon({name: 'house'})} />
                </Link>
            </div>
            <div className='flex flex-col gap-2 mb-32'>
                <Link className='sidebar-icon-box' to={"/tasks"}>
                    <FontAwesomeIcon className='sidebar-icon' icon={icon({name: 'list-check'})} />
                </Link>
                <Link className='sidebar-icon-box' to={"/notes"}>
                    <FontAwesomeIcon className='sidebar-icon' icon={icon({name: 'note-sticky'})} />
                </Link>
            </div>
            <div>
                <Link className='sidebar-icon-box' to={"/profile"}>
                    <FontAwesomeIcon className='sidebar-icon' icon={icon({name: 'user'})} />
                </Link>
            </div>
        </div>
    )
}
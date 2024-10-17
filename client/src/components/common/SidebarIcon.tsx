import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const SidebarIcon = ({expanded, route, icon, text}: {expanded: boolean, route: string, icon: IconDefinition, text: string}) => {
    if (expanded)
    return (
        <Link to={route}>
                <div className='icon-box mx-2 rounded-2xl select-none dark-bg-hover group '>
                    <FontAwesomeIcon className='icon' icon={icon} />
                    <p className='sidebar-tooltip group-hover:scale-100'>{text}</p>
                </div>
        </Link>
    )
    else
    return (
        <Link to={route}>
            <div className="flex flex-row p-5 h-12 gap-3 items-center
                            rounded-3xl select-none dark-bg-hover ">
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon className='icon' icon={icon} />
                </div>
                <span className="font-medium">{text}</span>
            </div>
        </Link>
    )
}
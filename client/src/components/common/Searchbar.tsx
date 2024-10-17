import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Searchbar = () => {
    return (
        <div className="flex flex-row justify-between items-center w-96 mr-10 rounded-3xl">
            <input type="text" className='block w-full border-0 py-2 pr-10 px-4 rounded-3xl ring-1 ring-inset ring-gray-300 focus:ring-slate-600' placeholder='Type something here...'/>
            <FontAwesomeIcon className='w-5 h-5 relative right-8' icon={icon({name: "magnifying-glass"})} />
        </div>
    )
}
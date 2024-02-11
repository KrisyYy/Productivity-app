import { SidebarIcon } from "./SidebarIcon"
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Sidebar = ({expanded}: {expanded: boolean}) => {
    return (
        <div className={"fixed top-0 left-0 h-screen py-2 flex flex-col justify-start bg-slate-800 transition-all duration-100 origin-left " + (expanded ? "w-16" : "w-48")}>
                <div className='flex flex-col gap-1'>
                    <SidebarIcon expanded={expanded} route={"/"} icon={icon({name: 'house'})} text={"Dashboard"}/>
                    <div className="mt-4">
                        <SidebarIcon expanded={expanded} route={"/tasks"} icon={icon({name: 'list-check'})} text={"Tasks"} />
                        <SidebarIcon expanded={expanded} route={"/notes"} icon={icon({name: 'note-sticky'})} text={"Notes"} />
                    </div>
                </div>
        </div>
    )
}
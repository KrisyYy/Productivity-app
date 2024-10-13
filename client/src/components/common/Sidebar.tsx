import { SidebarIcon } from "./SidebarIcon"
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

export const Sidebar = ({expanded}: {expanded: boolean}) => {
    return (
        <div className={"fixed top-0 left-0 h-screen py-2 flex flex-col justify-start bg-slate-800 transition-all duration-100 origin-left " + (expanded ? "w-16" : "w-48")}>
                <div className='flex flex-col gap-1'>
                    <SidebarIcon expanded={expanded} route={"/"} icon={faHouse} text={"Dashboard"}/>
                    <div className="mt-4">
                        <SidebarIcon expanded={expanded} route={"/tasks"} icon={faListCheck} text={"Tasks"} />
                        <SidebarIcon expanded={expanded} route={"/notes"} icon={faNoteSticky} text={"Notes"} />
                    </div>
                </div>
        </div>
    )
}
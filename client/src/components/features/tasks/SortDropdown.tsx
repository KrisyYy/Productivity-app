import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState } from "react";
import { ITask } from "../../../interfaces/task";

export const SortDropdown = ({ setTasks }: { setTasks: Dispatch<SetStateAction<ITask[]>> }) => {
	const [dropdown, setDropdown] = useState(false);
	const [currentSort, setCurrentSort] = useState("date");

	const handleBlur = ({ currentTarget, relatedTarget }: { currentTarget: any; relatedTarget: any }) => {
		if (currentTarget.contains(relatedTarget)) return;
		setDropdown(false);
	};

	const handleOnSubmit = (e: any) => {
		e.preventDefault();

		switch (e.target.value) {
			case "name": {
				if (currentSort === "name") {
					setTasks((state) => {
						console.log(state);
						state.reverse();
						return state.reverse();
					});
					break;
				}

				setTasks((state) => state.sort((a, b) => b.name.localeCompare(a.name)));
				setCurrentSort("name");

				break;
			}
			case "date": {
				if (currentSort === "date") {
					setTasks((state) => state.reverse());
					break;
				}
				setTasks((state) => state.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
				setCurrentSort("date");
				break;
			}
			default:
				break;
		}

		setDropdown(false);
	};

	return (
		<div onBlur={handleBlur} className="relative inline-block text-left w-32">
			<div>
				<button
					type="button"
					onClick={() => setDropdown((state) => !state)}
					className="inline-flex w-full items-center justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm divide-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					Sort
					<FontAwesomeIcon icon={faChevronDown} />
				</button>
			</div>

			{dropdown && (
				<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<form action="submit" onSubmit={handleOnSubmit}>
							<button
								value="name"
								onClick={handleOnSubmit}
								className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-100">
								By name
							</button>
							<button
								value="date"
								onClick={handleOnSubmit}
								className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-100">
								By date
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

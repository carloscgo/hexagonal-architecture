// app/components/HeaderList.tsx

import { Link } from "react-router-dom";
import { RiAddCircleFill } from "react-icons/ri";

interface PropsHeaderList {
    title: string;
    description: string;
    labelCreate: string;
    routeNew: string;
}

export default function HeaderList({ title, description, labelCreate, routeNew }: PropsHeaderList) {
    return (
        <div className="mb-4 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <span className="text-base font-normal text-gray-500">{description}</span>
            </div>
            <div className="flex-shrink-0">
                <Link to={routeNew} className="text-sm flex items-center font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">
                    <RiAddCircleFill size="20px" className="mx-2" />

                    {labelCreate}
                </Link>
            </div>
        </div>
    )
}
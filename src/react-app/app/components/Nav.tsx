// app/components/Nav.tsx

import { ReactNode, isValidElement } from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from 'react-icons/md'

interface PreviousItem {
    label: string;
    icon: HTMLDivElement | ReactNode;
}

type PropsNav = {
    current: string;
    previous: PreviousItem[];
}

export default function Nav({ current, previous }: PropsNav) {
    return (
        <nav className="flex px-5 py-3 text-gray-700 rounded-lg bg-gray-50 dark:bg-[#1E293B]" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {previous.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        <Link to="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            {isValidElement(item.icon) && item.icon}
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li>
                    <div className="flex items-center">
                        <MdArrowForwardIos size="16px" />

                        <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                            {current}
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}
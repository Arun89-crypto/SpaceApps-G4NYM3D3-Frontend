import React from 'react'
import { useLocation, Link, useParams } from 'react-router-dom';

// Icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import User from '../User.Component';

const AccountNavigator = (props) => {
    const { id } = useParams();
    return (
        <Link to={`/account/${id}/${props.route}`}>
            <User />
        </Link>
    )
}

export const AccountContainer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const tabs = [
        {
            title: "User",
            route: "user",
            isActive: currentPath.includes("user")
        },
        {
            title: "Reward",
            route: "reward",
            isActive: currentPath.includes("reward")
        }
        
        
    ]

    return (
        <>
            <div className="lg:container lg:mx-auto lg:px-72 lg:pt-6 px-4 md:px-8 bg-white sticky lg:top-20 md:top-16 lg:pb-4 md:pt-4 md:pb-4 top-16 py-2 mb-20 shadow-sm" style={{height:"fit-content"}}>
                <div className="flex justify-between">
                    {
                        tabs.map((tab) => (
                            <AccountNavigator {...tab} key={`3000${tab.route}`}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AccountContainer;
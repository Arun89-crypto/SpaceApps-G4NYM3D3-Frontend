import React from "react";
import {Route} from "react-router-dom"
import LandLayout from "../Layout/Landing.Layout";

const LandHOC = ({ component: Component, ...rest }) => {
    return (
            <Route {...rest} component={(props)=>(
                <LandLayout>
                    <Component {...props} />
                </LandLayout>
            )} >
            </Route>
    )
}

export default LandHOC;
import React from 'react'
import {AlertContext} from "./alertContext";

//it is a state, a component that will wrap all of our content in a provider,
// in order to provide it with all the additional functions that allow you to work with Alert

export const AlertState = ({children}) => {


    return(
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}

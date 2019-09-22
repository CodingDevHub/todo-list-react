import React, {useReducer} from 'react'
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

//it is a state, a component that will wrap all of our content in a provider,
// in order to provide it with all the additional functions that allow you to work with Alert

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false})

    const show = (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        })
    }

    const hide = () => dispatch({type: HIDE_ALERT})

    return(
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}

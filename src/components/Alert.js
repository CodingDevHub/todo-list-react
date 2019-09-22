import React from 'react'

export const Alert = ({alert}) =>{

    // If there is no alert parameter, we will return null and we will not render it
    if (!alert) {
        return null
    }

    return (
        <div className="{`alert alert-${alert.type || 'warning'} alert-dismissible`}">
            <strong>Alert!</strong>
            {alert.text}
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

            )
}

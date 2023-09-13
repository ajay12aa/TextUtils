import React from 'react'

function Alert(props) {

  
    return (
        props.alert && <div>
            <div class= { `alert alert-${props.alert.type} alert-dismissible fade show` }   role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.message}
            </div>
        </div>
    )
}
export default Alert




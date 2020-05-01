import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCoffee} />
const Navigation = () => {
    return (
        <div>
            {element}
        </div>
    )
}

export default Navigation

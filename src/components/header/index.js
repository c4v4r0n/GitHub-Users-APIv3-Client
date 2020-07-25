import React, { useState } from 'react'
import StyledHeader from './style'

// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const [ username, setUsername ] = useState('')
    return (
        <StyledHeader>
            <div className="stick"></div>
            <header>
                <h1>GitHub Users Client</h1>
                <div className="searchBar">
                    <input type="text" id="name"></input>
                    <FontAwesomeIcon className="button" icon={faSearch} onClick={() => setUsername(document.getElementById('name').value)}/>
                </div>
            </header>
        </StyledHeader>
    )
}



export default Header
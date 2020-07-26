import React from 'react'
import { useDispatch } from 'react-redux'
import StyledHeader from './style'

// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = () => {
    const dispatch = useDispatch()

    function searchName() {
        const name = document.getElementById('name').value
        dispatch({type: 'SEARCH_USER', name })
    }

    return (
        <StyledHeader>
            <div className="stick"></div>
            <header>
                <h1>GitHub Users Client</h1>
                <div className="searchBar">
                    <input type="text" id="name"></input>
                    <FontAwesomeIcon className="button" icon={faSearch} onClick={searchName}/>
                </div>
            </header>
        </StyledHeader>
    )
}



export default Header
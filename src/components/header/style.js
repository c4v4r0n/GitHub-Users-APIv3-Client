import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: #333399;
    color: #ffccff;
    font-family: monospace;
    height: 6em;
    display: flex;
    flex-direction: column;
    align-items: center;

    .stick {
        padding: 5px;
        background-color: #000066;
        width: 100%;
    }

    .button {
        margin-left: 1em;
        font-size: 1.5em;
        color: #ffccff;
        cursor: pointer;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        min-width: 300px;
        max-width: 1000px;
    }

    h1 {
        margin-right: 7vw;
    }

    input {
        margin-left: 7vw;
        border-radius: 5px;
        border: 1px;
        font-size: 1em;
        background-color: #99ccff;
    }

    @media only screen and (max-width: 680px) {
        h1 {
            display: none;
        }
        
        .searchBar {
            margin-top: 1.5em;
        }  
    }
`

export default StyledHeader
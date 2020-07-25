import styled from 'styled-components'

const MainStyled = styled.div`
    display: flex;
    justify-content: space-around;
    font-family: monospace;

    .boxMain {
        height: 100vh;
        min-height: 700px;
        width: 100vw;
        background-color: orangered;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .content {
        border-radius: 7px;
        border: 1px solid #000066;
        height: 90vh;
        width: 80vw;
        background-color: #333399;
        display: grid;
        grid-template-areas:
            "image data"
            "repos repos";
        max-width: 800px;
        min-height: 600px;
    }

    .userImage{
        font-size: 2em;
        min-height: 300px;
        max-width: 400px;
        width: 40vw;
        height: 45vh;
        grid-area: image;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .userData{
        min-height: 300px;
        max-width: 400px;
        width: 40vw;
        height: 45vh;
        grid-area: data;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: baseline;

    }
    .userRepos{
        min-height: 300px;
        max-width: 800px;
        width: 80vw;
        height: 45vh;
        grid-area: repos;
    }

    img {
        max-width: 125px;
        max-height: 210px;
        min-width: 25px;
        min-height: 110px;
        width: 20vw;
        height: 18vh;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    ul {
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        list-style: none;
    }

    li {
        margin-left: 35px;
        margin-right: 35px;
        padding: 10;
        background-color: orangered;
        border: 1px solid black;
        border-radius: 7px;
        height: 2em;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: black;
    }
`

export default MainStyled
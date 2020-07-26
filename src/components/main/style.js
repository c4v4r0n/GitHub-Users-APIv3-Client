import styled from 'styled-components'

const MainStyled = styled.div`
    display: flex;
    justify-content: space-around;
    font-family: monospace;

    .boxMain {
        min-height: 700px;
        width: 100vw;
        background-color: #ffccff;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .content {
        border-radius: 7px;
        margin-top: 4vh;
        border: 1px solid black;
        width: 80vw;
        background-color: #ff9234;
        display: grid;
        grid-template-areas:
            "image data"
            "repos repos";
        max-width: 800px;
        min-height: 600px;
        margin-bottom: 3vh;
        padding-bottom: 2vh;
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

    .userData h4 {
        padding-left: 1.3em;
    }

    .userRepos{
        min-height: 300px;
        max-width: 800px;
        width: 80vw;
        height: auto;
        grid-area: repos;
    }

    img {
        width: 110px;
        height: 110px;
        border: 1px solid black;
        border-radius: 7px;
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
        padding: 1em;
        background-color: #ffccff;
        border: 1px solid black;
        border-radius: 7px;
        height: 2em;
        margin-top: 1vh;
        margin-bottom: 1vh;
        display: flex;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: black;
        margin-left: 100px;
    }

    span {
        margin-left: auto;
        padding-right: 100px;
    }


    @media only screen and (max-width: 780px){
        .userRepos ul li span {
            display: none;
        }

        .userData {
            display: none;
        }

        .content {
            grid-template-areas:
                "image image"
                "repos repos";
        }

        .userImage {
            margin: auto;
        }

        li {
            justify-content: space-around;
        }
        li a {
            margin: 0;
        }
    }
`

export default MainStyled
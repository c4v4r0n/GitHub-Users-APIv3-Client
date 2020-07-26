import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MainStyled from './style'
import api from '../../services/api'


const MainBody = () =>{ 

    const gitUser = useSelector(state => state.data)
    
    useEffect(() => {
        api.get('/users/'+gitUser).then(userData => {
            //userImage
            const elementImg = document.querySelector('.userImage')
            elementImg.innerHTML = ''
            //Img
            const imgTag = document.createElement("img")
            imgTag.src = userData.data.avatar_url
            elementImg.appendChild(imgTag)
            //Nick
            const divNick = document.createElement("div")
            divNick.textContent = userData.data.login
            elementImg.appendChild(divNick)
            
            //userData
            const elementData = document.querySelector('.userData')
            elementData.innerHTML = ''
            //Name
            const spanName = document.createElement("h4")
            spanName.textContent = userData.data.name
            elementData.appendChild(spanName)
            //Desc
            const spanDesc = document.createElement("div")
            spanDesc.textContent = userData.data.bio
            spanDesc.style = "padding: 15px;"
            elementData.appendChild(spanDesc)
        })
        api.get('/users/'+gitUser+'/repos').then(userData => {
            const elementRepos = document.querySelector('.userRepos')
            elementRepos.innerHTML = ''
            const list = document.createElement("ul")
            elementRepos.appendChild(list)
            userData.data.forEach(e => {
                const repoListItem = document.createElement("li")
                const repoListItemLink = document.createElement("a")
                const repoListItemLang = document.createElement("span")
                
                repoListItemLink.href = e.svn_url
                repoListItemLink.textContent = e.name
                repoListItemLang.textContent = e.language
                
                repoListItem.appendChild(repoListItemLink)
                repoListItem.appendChild(repoListItemLang)
                list.appendChild(repoListItem)
            });
        })
    })
    return (
        <MainStyled>
            <div  className="boxMain">
                <div className="content">
                    <div className="userImage"></div>
                    <div className="userData"></div>
                    <div className="userRepos"></div>
                </div>
            </div>
        </MainStyled>
    )
}

export default MainBody
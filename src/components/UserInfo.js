import userInfoContext from '../context/userInfo/UserInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/theme/ThemeContext'

const UserInfo= () => {
    const context = useContext(userInfoContext)
    const {userInfo, setUserInfo,getUserInfo} = context

    const con = useContext(ThemeContext)
    const {theme,toogleTheme} = con

    const user = localStorage.getItem("userHandle");
    const juser = JSON.parse(user)

    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        getUserInfo()
      },[])

      const rank = userInfo.rank && (userInfo.rank[0].toUpperCase() + userInfo.rank.slice(1))
      let color = "#FFFFFF"
      let tcolor = "#FFFFFF"
      if(userInfo.rank==="legendary grandmaster"){
        color="#FF0000"
        tcolor="#000000";
      }
      else if(userInfo.rank=== "international grandmaster"){
        color="#ff6666"
        tcolor="#FF0000";
      }
      else if(userInfo.rank=== "grandmaster"){
        color="#ff6666"
        tcolor="#FF0000";
      }
      else if(userInfo.rank=== "international master"){
        color="#FED8B1"
        tcolor="#FFA500";
      }
      else if(userInfo.rank=== "master"){
        color="#FED8B1"
        tcolor="#FFA500";
      }
      else if(userInfo.rank=== "candidate master"){
        color="#CCCCFF"
        tcolor="#673147";
      }
      else if(userInfo.rank=== "expert"){
        color="#B7E2F0"
        tcolor="#0000FF";
      }
      else if(userInfo.rank==="specialist"){
        color="#96DED1"
        tcolor="#007777";
      }
      else if(userInfo.rank=== "pupil"){
        color="#AFE1AF"
        tcolor="#40826D";
      }
      else if(userInfo.rank=== "newbie"){
        color="#C0C0C0"
        tcolor="#404040";
      }

      const style = {
        color:tcolor,
        backgroundColor:color
    }

    return (
    <div className="row">
        <div className="card text-center" >
  <div className="card-header" style={{color:(theme==="light"?tcolor:"black"),fontWeight:"bold",backgroundColor:(theme==="dark"?color:"white")}} >
    {userInfo.handle}
  </div>
  <div className="card-body" >
    <div className='' >
      <h5 className="card-title">{rank} </h5>
      <footer className="blockquote-footer mt-0"><em>{userInfo.maxRank}</em></footer>
    </div>
    <p className="card-text ">You can view your attempted & successful atempts in accordance with rating & levels</p>
    <a style={{color:(theme==="light"?"white":"white"), backgroundColor:(theme==="dark"?"black":"#0d6efd")}} target="_blank" href={`https://codeforces.com/profile/${juser.name}`} className="btn btn-light ">Go To Profile</a>
    <Link style={{color:(theme==="light"?"white":"white"), backgroundColor:(theme==="dark"?"black":"#0d6efd")}}  to="/contests" className="btn btn-light">Contests</Link>
  </div>
  <div style={{color:(theme==="light"?tcolor:"black"),fontWeight:"bold",backgroundColor:(theme==="dark"?color:"white")}}>
  <div className="card-footer text">
  {userInfo.rating} / {userInfo.maxRating}
  </div>
  </div>
</div>
        
    </div>
  )
}

export default UserInfo

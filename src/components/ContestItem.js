import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext';
import userInfoContext from '../context/userInfo/UserInfoContext';
import Contests from './Contests';

const ContestItem = (props) => {
    
    const {contest} = props;
    const p = contest.p;
    
    const con = useContext(ThemeContext)
    const {theme,toogleTheme} = con

    const c1 = useContext(userInfoContext)
    const {userInfo, setUserInfo,getUserInfo} = c1

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
    
    return (
        <>
    <div className="col-md-3">
        <div className={`card text-bg-light mb-3`}>
  <div className={`card-header border-light `}>Contest ID: {contest.contestId}</div>
  <div className="card-body ">
    <h5 className="card-title">{contest.contestName}</h5>
    <p className="card-text">Old Rating: {contest.oldRating} <br/>New Rating: {contest.newRating}</p>
  </div>
  <div className={`card-footer bg-transparent border-light`}>Rank: {contest.rank} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a target="_blank" href={`https://codeforces.com/contest/${contest.contestId}`} className={`link-dark`}>Contest</a></div>
</div>
    </div>
    </>
  )
}

export default ContestItem

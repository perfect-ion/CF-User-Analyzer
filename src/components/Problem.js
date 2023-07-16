import React, { useContext, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import ProblemContext from '../context/problem/ProblemContext'
import ThemeContext from '../context/theme/ThemeContext'
import userInfoContext from '../context/userInfo/UserInfoContext'

const Problem = () => {

  const context = useContext(ProblemContext)
  const {Problems, setProblems,getStatistics} = context

  const c1 = useContext(userInfoContext)
  const {userInfo, setUserInfo,getUserInfo} = c1

  useEffect(()=>{
    getStatistics()
    getUserInfo()
  },[])

  const con = useContext(ThemeContext)
  const {theme,toogleTheme} = con


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

  const user = localStorage.getItem("userHandle");
  const juser = JSON.parse(user)

    const {level,lvl,lv,l} = Problems
    let lm = 0;
    if(lm<l.A) lm=l.A;
    if(lm<l.B) lm=l.B;
    if(lm<l.C) lm=l.C;
    if(lm<l.D) lm=l.D;
    if(lm<l.E) lm=l.E;
    if(lm<l.F) lm=l.F;
    if(lm<l.G) lm=l.G;
    if(lm<l.H) lm=l.H;
    if(lm<l.I) lm=l.I;
    if(lm<l.J) lm=l.J;
    if(lm<l.K) lm=l.K;
    if(lm<l.L) lm=l.L;
    if(lm<l.M) lm=l.M;
    // console.log(level)
    lm+=4;

    let lmm=0;
    if(lmm<lvl.A) lmm=lvl.A;
    if(lmm<lvl.B) lmm=lvl.B;
    if(lmm<lvl.C) lmm=lvl.C;
    if(lmm<lvl.D) lmm=lvl.D;
    if(lmm<lvl.E) lmm=lvl.E;
    if(lmm<lvl.F) lmm=lvl.F;
    if(lmm<lvl.G) lmm=lvl.G;
    if(lmm<lvl.H) lmm=lvl.H;
    if(lmm<lvl.I) lmm=lvl.I;
    if(lmm<lvl.J) lmm=lvl.J;
    if(lmm<lvl.K) lmm=lvl.K;
    if(lmm<lvl.L) lmm=lvl.L;
    if(lmm<lvl.M) lmm=lvl.M;
    lmm+=7


  return (
    <div>
    <div className='container shadow-lg p-3 mb-5 bg-white rounded' style={{marginTop: "65px"}}>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Ratings of {juser.name}</th>
      <th scope="col">800</th>
      <th scope="col">900</th>
      <th scope="col">1000</th>
      <th scope="col">1100</th>
      <th scope="col">1200</th>
      <th scope="col">1300</th>
      <th scope="col">1400</th>
      <th scope="col">1500</th>
      <th scope="col">1600</th>
      <th scope="col">1700</th>
      <th scope="col">1800</th>
      <th scope="col">1900</th>
      <th scope="col">2000</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">Attempted</th>
      <td>{lv.A}</td>
      <td>{lv.B}</td>
      <td>{lv.C}</td>
      <td>{lv.D}</td>
      <td>{lv.E}</td>
      <td>{lv.F}</td>
      <td>{lv.G}</td>
      <td>{lv.H}</td>
      <td>{lv.I}</td>
      <td>{lv.J}</td>
      <td>{lv.K}</td>
      <td>{lv.L}</td>
      <td>{lv.M}</td>
    </tr>
    <tr>
      <th scope="row">Successful</th>
      <td>{l.A}</td>
      <td>{l.B}</td>
      <td>{l.C}</td>
      <td>{l.D}</td>
      <td>{l.E}</td>
      <td>{l.F}</td>
      <td>{l.G}</td>
      <td>{l.H}</td>
      <td>{l.I}</td>
      <td>{l.J}</td>
      <td>{l.K}</td>
      <td>{l.L}</td>
      <td>{l.M}</td>
    </tr>
    <tr>
      <th scope="row">Average Attempt</th>
      <td>{l.A!==0?(lv.A/l.A).toFixed(2):0}</td>
      <td>{l.B!==0?(lv.B/l.B).toFixed(2):0}</td>
      <td>{l.C!==0?(lv.D/l.C).toFixed(2):0}</td>
      <td>{l.D!==0?(lv.E/l.D).toFixed(2):0}</td>
      <td>{l.E!==0?(lv.F/l.E).toFixed(2):0}</td>
      <td>{l.F!==0?(lv.G/l.F).toFixed(2):0}</td>
      <td>{l.G!==0?(lv.H/l.G).toFixed(2):0}</td>
      <td>{l.H!==0?(lv.I/l.H).toFixed(2):0}</td>
      <td>{l.I!==0?(lv.J/l.I).toFixed(2):0}</td>
      <td>{l.J!==0?(lv.K/l.J).toFixed(2):0}</td>
      <td>{l.K!==0?(lv.L/l.K).toFixed(2):0}</td>
      <td>{l.L!==0?(lv.M/l.L).toFixed(2):0}</td>
      <td>{l.M!==0?(lv.M/l.M).toFixed(2):0}</td>
    </tr>
  </tbody>
</table>
    </div>

    
    <div>
    <div className="row" ><div className='col col-sm-1'></div><div className='col'>
    <table className="table">
      <thead>
        <tr>
      <th scope="col">0</th>
      <th scope="col">{(lm/10).toFixed(0)}</th>
      <th scope="col">{(2*lm/10).toFixed(0)}</th>
      <th scope="col">{(3*lm/10).toFixed(0)}</th>
      <th scope="col">{(4*lm/10).toFixed(0)}</th>
      <th scope="col">{(5*lm/10).toFixed(0)}</th>
      <th scope="col">{(6*lm/10).toFixed(0)}</th>
      <th scope="col">{(7*lm/10).toFixed(0)}</th>
      <th scope="col">{(8*lm/10).toFixed(0)}</th>
      <th scope="col">{(9*lm/10).toFixed(0)}</th>
      <th scope="col">{(lm.toFixed(0))}</th>
      </tr>
      </thead>
    </table>
      </div></div><div></div>
    </div>

    <div className='container my-3 '>

      <div className="row" ><div className='col col-sm-1'><h5>800</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.A)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>900</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.B)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1000</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.C)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1100</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.D)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1200</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.E)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1300</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.F)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1400</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.G)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1500</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.H)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1600</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.I)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1700</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.J)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1800</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.K)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>1900</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.L)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>2000</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*l.M)/lm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>

    

    </div>




    <div className='container shadow-lg p-3 mb-5 bg-white rounded' style={{marginTop: "60px"}}>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Levels of {juser.name}</th>
      <th scope="col">A</th>
      <th scope="col">B</th>
      <th scope="col">C</th>
      <th scope="col">D</th>
      <th scope="col">E</th>
      <th scope="col">F</th>
      <th scope="col">G</th>
      <th scope="col">H</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">Attempted</th>
      <td>{level.A}</td>
      <td>{level.B}</td>
      <td>{level.C}</td>
      <td>{level.D}</td>
      <td>{level.E}</td>
      <td>{level.F}</td>
      <td>{level.G}</td>
      <td>{level.H}</td>
    </tr>
    <tr>
      <th scope="row">Successful</th>
      <td>{lvl.A}</td>
      <td>{lvl.B}</td>
      <td>{lvl.C}</td>
      <td>{lvl.D}</td>
      <td>{lvl.E}</td>
      <td>{lvl.F}</td>
      <td>{lvl.G}</td>
      <td>{lvl.H}</td>
    </tr>
    <tr>
      <th scope="row">Avg Attempts</th>
      <td>{(level.A/lvl.A).toFixed(2)}</td>
      <td>{(level.B/lvl.B).toFixed(2)}</td>
      <td>{(level.C/lvl.C).toFixed(2)}</td>
      <td>{(level.D/lvl.D).toFixed(2)}</td>
      <td>{(level.E/lvl.E).toFixed(2)}</td>
      <td>{(level.F/lvl.F).toFixed(2)}</td>
      <td>{(level.G/lvl.G).toFixed(2)}</td>
      <td>{(level.H/lvl.H).toFixed(2)}</td>
    </tr>
  </tbody>
</table>
    </div>

    <div>
    <div className="row" ><div className='col col-sm-1'></div><div className='col'>
    <table className="table">
      <thead>
        <tr>
      <th scope="col">0</th>
      <th scope="col">{(lmm/10).toFixed(0)}</th>
      <th scope="col">{(2*lmm/10).toFixed(0)}</th>
      <th scope="col">{(3*lmm/10).toFixed(0)}</th>
      <th scope="col">{(4*lmm/10).toFixed(0)}</th>
      <th scope="col">{(5*lmm/10).toFixed(0)}</th>
      <th scope="col">{(6*lmm/10).toFixed(0)}</th>
      <th scope="col">{(7*lmm/10).toFixed(0)}</th>
      <th scope="col">{(8*lmm/10).toFixed(0)}</th>
      <th scope="col">{(9*lmm/10).toFixed(0)}</th>
      <th scope="col">{(lmm.toFixed(0))}</th>
      </tr>
      </thead>
    </table>
      </div></div><div></div>
    </div>

    <div className='container my-3'>

      <div className="row" ><div className='col col-sm-1'><h5>A</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*lvl.A)/lmm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>B</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*lvl.B)/lmm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>C</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*lvl.C)/lmm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>D</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*lvl.D)/lmm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>E</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*lvl.E)/lmm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>F</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*lvl.F)/lmm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>G</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*lvl.G)/lmm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>
      <div className="row" ><div className='col col-sm-1'><h5>H</h5></div><div className='col'><div className="progress">
      <div className="progress-bar" role="progressbar" aria-label="Basic example"  style={{width: `${(100*lvl.H)/lmm}%`, backgroundColor:(theme==="dark"?tcolor:"")}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div></div></div><div></div>

    </div>


    </div>
    
  )
}

export default Problem

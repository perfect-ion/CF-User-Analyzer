import react, { useState } from "react"
import ProblemContext from "./ProblemContext"

let level = {
  A:0,
  B:0,
  C:0,
  D:0,
  E:0,
  F:0,
  G:0,
  h:0
}

let lvl = {
  A:0,
  B:0,
  C:0,
  D:0,
  E:0,
  F:0,
  G:0,
  H:0
}

let lv = {
  A:0,
  B:0,
  C:0,
  D:0,
  E:0,
  F:0,
  G:0,
  H:0,
  I:0,
  J:0,
  K:0,
  L:0,
  M:0
}

let l = {
  A:0,
  B:0,
  C:0,
  D:0,
  E:0,
  F:0,
  G:0,
  H:0,
  I:0,
  J:0,
  K:0,
  L:0,
  M:0
}

const notesInitial = {level,lvl,lv,l}

const ProblemState = (props)=>{

  const getStatistics = async ()=>{
    const user = localStorage.getItem("userHandle");
    const juser = JSON.parse(user)
    const response = await fetch(`https://codeforces.com/api/user.status?handle=${juser.name}`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
      }
    });
    
    const json = await response.json()
  
    const {status,result} = json;

    let level = {
      A:0,
      B:0,
      C:0,
      D:0,
      E:0,
      F:0,
      G:0,
      H:0
    }

    let lvl = {
      A:0,
      B:0,
      C:0,
      D:0,
      E:0,
      F:0,
      G:0,
      H:0
    }

    let lv = {
      A:0,
      B:0,
      C:0,
      D:0,
      E:0,
      F:0,
      G:0,
      H:0,
      I:0,
      J:0,
      K:0,
      L:0,
      M:0
    }

    let l = {
      A:0,
      B:0,
      C:0,
      D:0,
      E:0,
      F:0,
      G:0,
      H:0,
      I:0,
      J:0,
      K:0,
      L:0,
      M:0
    }

    for (const key in result){
      const {problem} = result[key]
        if(problem.index==='A') level.A++;
        else if(problem.index==='B') level.B++;
        else if(problem.index==='C') level.C++;
        else if(problem.index==='D') level.D++;
        else if(problem.index==='E') level.E++;
        else if(problem.index==='F') level.F++;
        else if(problem.index==='G') level.G++;
        else if(problem.index==='H') level.H++;
    }


    for (const key in result){
      const {problem} = result[key]
      if(result[key].verdict==="OK"){
        if(problem.index==='A') lvl.A++;
        else if(problem.index==='B') lvl.B++;
        else if(problem.index==='C') lvl.C++;
        else if(problem.index==='D') lvl.D++;
        else if(problem.index==='E') lvl.E++;
        else if(problem.index==='F') lvl.F++;
        else if(problem.index==='G') lvl.G++;
        else if(problem.index==='H') lvl.H++;
      }
    }


    for (const key in result){
      const {problem} = result[key]
        if(problem.rating===800) lv.A++;
        else if(problem.rating===900) lv.B++;
        else if(problem.rating===1000) lv.C++;
        else if(problem.rating===1100) lv.D++;
        else if(problem.rating===1200) lv.E++;
        else if(problem.rating===1300) lv.F++;
        else if(problem.rating===1400) lv.G++;
        else if(problem.rating===1500) lv.H++;
        else if(problem.rating===1600) lv.I++;
        else if(problem.rating===1700) lv.J++;
        else if(problem.rating===1800) lv.K++;
        else if(problem.rating===1900) lv.L++;
        else if(problem.rating===2000) lv.M++;
    }

    for (const key in result){
      const {problem} = result[key]
      if(result[key].verdict==="OK"){
        if(problem.rating===800) l.A++;
        else if(problem.rating===900) l.B++;
        else if(problem.rating===1000) l.C++;
        else if(problem.rating===1100) l.D++;
        else if(problem.rating===1200) l.E++;
        else if(problem.rating===1300) l.F++;
        else if(problem.rating===1400) l.G++;
        else if(problem.rating===1500) l.H++;
        else if(problem.rating===1600) l.I++;
        else if(problem.rating===1700) l.J++;
        else if(problem.rating===1800) l.K++;
        else if(problem.rating===1900) l.L++;
        else if(problem.rating===2000) l.M++;
      }
    }

    setProblems({level,lvl,lv,l})
  }

    const [Problems, setProblems] = useState(notesInitial)

    return (
        <ProblemContext.Provider value={{Problems,setProblems,getStatistics}}>
            {props.children}
        </ProblemContext.Provider>
    )
}

export default ProblemState;

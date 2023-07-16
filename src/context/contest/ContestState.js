import react, { useState } from "react"
import contestContext from "./ContestContext"
const notesInitial = []


const ContestState = (props)=>{


  const getContests = async ()=>{
    const user = localStorage.getItem("userHandle");
    const juser = JSON.parse(user)
    const response = await fetch(`https://codeforces.com/api/user.rating?handle=${juser.name}`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    const {status,result} = json;
  
    for(let i=0;i<Object.keys(result).length;i++){
      result[i].p = i;
    }
    result.reverse();
    setContests(result)
  }


    const [contests, setContests] = useState(notesInitial)

    return (
        <contestContext.Provider value={{contests,setContests,getContests}}>
            {props.children}
        </contestContext.Provider>
    )
}

export default ContestState;

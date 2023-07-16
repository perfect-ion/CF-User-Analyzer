import react, { useState } from "react"
import UserInfoContext from "./UserInfoContext";


const UserInfoState = (props)=>{

  const getUserInfo = async ()=>{
    const user = localStorage.getItem("userHandle");
    const juser = JSON.parse(user)
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${juser.name}`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
      }
    });
    const json = await response.json()
    const {status,result} = json;
    setUserInfo(result[0])
  }


    const [userInfo, setUserInfo] = useState({})

    return (
        <UserInfoContext.Provider value={{userInfo,setUserInfo,getUserInfo}}>
            {props.children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoState;

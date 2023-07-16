import e from 'cors';
import React, { useContext, useEffect, useState } from 'react'
import { GridLoader } from 'react-spinners';
import ProblemContext from '../context/problem/ProblemContext';
import userInfoContext from '../context/userInfo/UserInfoContext';
import Contests from './Contests';
import Problem from './Problem';
import UserInfo from './UserInfo';

const Find = () => {

    const [user,setUser] = useState();
    const [isShown, setIsShown] = useState(false);

    const c1 = useContext(ProblemContext)
    const {getStatistics} = c1

    const c2 = useContext(userInfoContext)
    const {getUserInfo} = c2

    const [loaded,setLoaded] = useState(false)
    const handleClick = (e)=>{
        e.preventDefault()
        localStorage.setItem('userHandle', JSON.stringify(user));
        if(isShown===false) setIsShown(true);
    
          getStatistics()
          getUserInfo()  
          setLoaded(false)
          setTimeout(()=>{
            setLoaded(true)
          },5000)
    }


    const onChange = (e)=>{
        setUser({...user, [e.target.name]:[e.target.value]})
    }

  return (
    <>  
    <div className='container shadow-lg p-3 mb-5 bg-white rounded' style={{width:"650px",margin:"auto",marginTop:"85px",backgroundColor:"#F0F0F0"}}>
    <div className='container'>
        <form className="row g-3">
    <div className="col-auto">
      <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="Codeforces Handle" onChange={onChange}/>
    </div>
    <div className="col-auto">
      <input type="text" className="form-control" id="name" name="name" placeholder="user" onChange={onChange}/>
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-3" onClick={handleClick} >Find handle</button>
    </div>
  </form>
      </div>

      </div>

      {(isShown===true && loaded===false)?
    <div className='container' style={{width:"125px",margin:"auto",marginTop:"175px"}}>
      <GridLoader color="#36d7b7" />
    </div>
    :<></>}

    {isShown===false?
    <>
    <div className='container' style={{width:"250px",margin:"auto",marginTop:"50px"}}>
      <p className="text-monospace">Developed by <a href="https://www.instagram.com/__gauravbansal_" className="link-dark">Gaurav</a></p>
    </div>
    </>
    :<></>}


      {(loaded===true && isShown)===true?
      <>
      <div className="contanier my-3">
      <UserInfo/>
      </div>
      <div className="contanier my-5">
      <Problem/>
      </div>
      <div className="contanier my-5">
      {/* <Contests user={user}/> */}
      </div>
      </>:<></>
    }

</>
    
  )
}

export default Find

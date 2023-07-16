import contestContext from '../context/contest/ContestContext'
import React, { useContext, useEffect, useState } from 'react'
import ContestItem from './ContestItem'
import { GridLoader } from 'react-spinners';

const Contests = () => {
    const context = useContext(contestContext)
    const {contests, setContests,getContests} = context
    const [loaded,setLoaded] = useState(false)
    setTimeout(()=>{
      setLoaded(true)
    },2500)

    
    useEffect(()=>{
        getContests()
      },[])
      

    return (
    <div className="row my-4">
      {(loaded===false)?
    (<div className='container' style={{width:"125px",margin:"auto",marginTop:"200px"}}>
      <GridLoader color="#36d7b7" />
    </div>)
    :
    (<><h4 className='mt-5 my-3' style={{"textAlign": "center"}}>Contests</h4>
    {contests.map((contest)=>{
      return <ContestItem key={contest.contestId} contest={contest}/>
    })}
    </>) 
    }
      
    </div>
  )
}

export default Contests

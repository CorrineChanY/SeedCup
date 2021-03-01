/**
 * 我的队伍
 * @file Percenter.js
 * @author 
 * @copyright 
 * @createDate
 */

import { useState, useEffect } from 'react'
import { API } from '../../misc/interface'


function Percenter() {
  const [usr, setUsr] = useState({});

  useEffect(() => {
    ;(async function checkLogin(){
      try {
        const r = await API.getCurrent();
        setUsr(r.data.data);
      } catch(error) {
        console.log(error);
      }
    })();
  }, []);

  return(
    <>
      {usr.usrname ? (
        <>
        <h1 style={{color: "black"}}>This is Percenter!</h1>
        </>
      ) : (
        <>
        <h1 style={{color: "black"}}>未登陆！</h1>
        </>
      )}
    </>
  )
}

export default Percenter;
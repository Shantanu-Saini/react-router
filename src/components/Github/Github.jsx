import React, { useEffect, useState } from 'react'

const Github = () => {
  const [myData, setMyData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Shantanu-Saini')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setMyData(data.public_repos)
      })
  }, [])

  return (
    <>
      <div className='text-center py-4 bg-slate-600 text-white h-screen text-3xl'>
        <h1>Github</h1>
        <p>Repos : {myData}</p>
      </div>
    </>
  )
}

export default Github
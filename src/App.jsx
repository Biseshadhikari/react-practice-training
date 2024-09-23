import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Conditional from './component/Conditional'
import PracticeUseEffect from './component/PracticeUseEffect'

function App() {
    const [datas,setDatas] = useState(["home","about","Contact","services"])
    const [username,setUsername] = useState('ram')
    function sendMessage(){ 
        alert("hello")
    }
   
    function clickedMessage(data){  
        alert(data+ " clicked")
    }

    
  return (
    <div>
        {/* <Navbar data ={data} /> */}
        {/* <Navbar message = {sendMessage} clickedMessage = {clickedMessage} datas = {datas}/> */}

        {/* <Conditional username = {username} /> */}
        <PracticeUseEffect/>
    </div>
  )
}

export default App

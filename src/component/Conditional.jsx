import React, { useState } from 'react'

function Conditional(props) {
    const [isLoggedin,setIsLoggedIn] = useState(false)
    // let content;
    // if (isLoggedin == false){ 
    //     content = <h1>please log in</h1>
    // }else{ 
    //     content = <h1>welcome user</h1>
    // }

  return (
    <div>
      {/* {isLoggedin==true?<h1>welcome user</h1>:<h1>please log in</h1>} */}
      {props.username == "bisesh"?<h1>Welcome Bisesh</h1>:<h1>Welcome anonymous user</h1>}
    </div>
  )
}

export default Conditional

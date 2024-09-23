import React from 'react';

function Navbar(props) {
  return (
    <div>
      {props.datas.map((data) => (
        <button 
          onClick={()=>props.clickedMessage(data)}
        >
          {data}
        </button>
      ))}
    </div>
  );
}

export default Navbar;

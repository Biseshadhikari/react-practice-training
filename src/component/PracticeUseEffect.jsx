import React, { useEffect, useState } from 'react';

function PracticeUseEffect({datas,username}) {
    const [changeName, setChangeName] = useState('');

    const [counter,setCounter] = useState(0)

    useEffect(() => { 
        changeCounter()
    }, [changeName]);

    // function changeNameFunction() { 
    //     setChangeName(changeName+ " student");
    // }

    function changeCounter(){ 
        setCounter(counter+1)
    }

    return (
        <div>
            <input 
                type="text"  
                value={changeName}
                onChange={(e)=>{
                    setChangeName(e.target.value)
                }} 
                
            />
            {counter}
            {/* {datas.map(data=>{
                return(<li>{data}</li>)
            })} */}
            
        </div>

    );
}

export default PracticeUseEffect;

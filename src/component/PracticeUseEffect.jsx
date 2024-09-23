import React, { useEffect, useState } from 'react';

function PracticeUseEffect() {
    const [changeName, setChangeName] = useState('bisesh');

    useEffect(() => { 
        changeNameFunction();
    }, []);

    function changeNameFunction() { 
        setChangeName(changeName+ " student");
    }

    return (
        <div>
            <input 
                type="text"  
                value={changeName} 
                
            />
        </div>
    );
}

export default PracticeUseEffect;

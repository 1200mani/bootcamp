import React, { useEffect, useState } from "react";

function ApiFetch(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(
            res =>{
                res.json().then((data)=>{  
                    setData(data);
                })
            } 
        )
    }, []);
    return (
        <div>
            {data.map( d => <div key={d.id}>{d.name}</div>)}      
        </div>
    )
}
export default ApiFetch;
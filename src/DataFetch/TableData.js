import React, { useEffect, useState } from "react";
import "./Table.css"

function TableData() {
    const [data, setData] = useState([]);
    const [error,setError] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
              const res = await fetch("https://jsonplaceholder.typicode.com/users");
              const response = await res.json();
              setData(response);
            }
            catch(error){
                setError(error);
            }
    }
    fetchData();
    });

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>userName</th>
                    <th>Phone no.</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {data.map(nm => (<p key={nm.id}>{nm.name}</p>))}
                    </td>
                    <td>
                        {data.map(userNm => (<p key={userNm.id}>{userNm.username}</p>))}
                    </td>
                    <td>
                        {data.map(userPh => (<p key={userPh.id}>{userPh.phone}</p>))}
                    </td>
                    <td>
                        {data.map(userEmail => (<p key={userEmail.id}>{userEmail.email}</p>))}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TableData;
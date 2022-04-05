import React, { useState } from "react";

function Array() {
    const [arr, setArr] = useState([
        "Hi,",
        "There",
        "This side mani"
    ])
    const [value, setValue] = useState("");

    const [search, setSearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addValue(value);
        setValue("");
    }
    const addValue = () => {
        const newValueAdded = [...arr, value]
        setArr(newValueAdded);

    }

    return (<div>
        <form onSubmit={handleSubmit}>

            <input

                type="text"

                value={value}

                placeholder="enter something to add"

                onChange={e => setValue(e.target.value)}
            />
        </form>

        {arr.map((data) => {

            <h3>{data}</h3>
            {console.log(data)}
        })}
        <input type="text" placeholder='Enter a something to search!' onChange={(event) => setSearch(event.target.value)} />
        {
            arr && arr.filter(data => {
              if (search === "") {
                    return data;
                } else if (data.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return data;
                }
            }).map((data, index) => {
                return (
                    <div key={index} style={{ padding: 20 }}>
                        <h4>{data}</h4>
                    </div>
                )
            })
        }  
    </div>);
}
export default Array;
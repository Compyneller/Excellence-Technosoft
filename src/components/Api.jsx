import React, {useEffect, useState} from 'react'
import './style.css'

const Api = () => {



    const [users , setUsers] = useState([]);

    const getUsers = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        console.log(response);
        setUsers ( await response.json());
        // console.log(data)
    }
    useEffect(()=>{
        getUsers();
    }, [])
    return (
        <>
            <div className="container">

                {

                    users.map((curElem)=>{
                        return(
                            <div className="card">
                                <div className="card-image">
                                    <img src={curElem.url} alt="" />
                                </div>
                                 <div className="card-text">
                                    <h1>{curElem.title}</h1>
                                    <a href={curElem.url}>{curElem.url}</a>
                                    

                                </div>
                            </div>
                        )
                    })


                }
                
            </div>
        </>
    )
}

export default Api

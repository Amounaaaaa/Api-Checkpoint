import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const UserList = () => {
    //listOfUSer
    const [listOfUSer, setlistOfUSer] = useState([]); // where to store the returned data
    const [error, setError] = useState(null); // where to store the coming errors
    useEffect(() => {
        
        function fetchData() {
            axios.get('https://jsonplaceholder.typicode.com/users',{ headers: { 
                'Access-Control-Allow-Origin' : '*',
                }})
            .then(res => res.json()) 
            .then(res => setlistOfUSer(res.hits))
            .catch(function (error) {
                // handle error
                console.log("erreur msg : ",error);
              })
         
        }
     
        fetchData();
      }, []);
   

    return (
        <div>
              {listOfUSer.map(el=><div> {el}</div>)}
        </div>
    )
}

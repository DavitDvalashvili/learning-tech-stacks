
import { useEffect, useState} from 'react';
import './App.css';
import {users} from "./usersInterface"
import axios from 'axios';

function App() {
    const [users, setUsers] = useState<users[] | null>(null);

    //axios instance
    const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    })



    // // fetch  and then
    // useEffect (()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response)=> response.json().then((data) => {
    //         console.log(data)
    //         setUsers(data)
    //     }))
    // }, []);

    
    // await and async
    // useEffect (()=> {
    //     const requestUser = async() => {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //         const data = await response.json();
    //         console.log(data);
    //         setUsers(data);
    //     }
    //     requestUser();
    // }, []);

    //axios 
    useEffect (()=> {
        const requestUser = async() => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            const data = await response.data
            console.log(data);
            setUsers(data);
        }
        requestUser();
    }, []);

    // //axios with instance
    // useEffect (()=> {
    //     const requestUser = async() => {
    //         const response = await axiosInstance.get("/users")
    //         const data = await response.data
    //         console.log(data);
    //         setUsers(data);
    //     }
    //     requestUser();
    // }, []);


    // //post request
    // const postUser = async () => {
    //     const createUser = await axiosInstance.get("/users", {
    //         username: "nika1996",
    //         email: "sdsdejmcioejdoi@gmail.com",
    //         password: "SDfa2865",
    //     });
    // }



    



  return (
    <div className="App">
        <ul>
            {users && users.map((user) => <li key={user.id}>{user.address.geo.lng}</li>)}
        </ul>
    </div>
  );
}

export default App;

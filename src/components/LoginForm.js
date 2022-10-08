import React from "react";
import { useState } from 'react';
import axios from "axios";

const projectID = "1bb66aaa-b9b5-42e9-887b-53110ea400e7";

const LoginForm = () => {

    const [username, setUserName] = useState ('');
    const [password, setPassword] = useState ('');
    const [error,setError] = useState ('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password}
    
        try {
            await axios.get('https://api.chatengine.io/chats',{headers:authObject})
            localStorage.setItem('username',username)
            localStorage.setItem('password', password)

            window.location.reload()
            setError('');
        } catch (err){
            setError('oooops, incorrect credentials!')
        }
    
    }
    
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Fun Chat App</h1>
                <form onSumit={handleSubmit}>
                    <input type="text" value={username} onChange={ (e) => setUserName(e.target.value)} className="input" placeholder="Enter your username" required/>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm;
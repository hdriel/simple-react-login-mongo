import React from 'react';
import {useSelector} from "react-redux";

export default function App() {
    const { user } = useSelector(state => ({
        user: state.auth.user,
    }));

    return (
        <div className="center-h">
            <h1>Welcome {user.name}</h1>
        </div>
    );
}

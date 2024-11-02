import React from 'react';
import UserList from './page/UserList';
import UserContext from './UseContext/Laatihan1';

function App() {
    return (
        <UserContext>
            <div>
                <h1>Welcome to User App</h1>
                <UserList />
            </div>
        </UserContext>
    );
}

export default App;

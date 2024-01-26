import React from 'react';
import UserDetail from "./userComponent/UserDetail";
import Login from "./Login";
import { useUserContext } from '../../../layouts/LayoutSite';

const User = () => {
    const { user } = useUserContext();
    return (
        <>
            {user ? <UserDetail user={user} /> : <Login />}
        </>
    );
};

export default User;
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

export default function AddMovie() {

    const history = useHistory();

    useEffect(() => {
        !localStorage.getItem('user') && history.push('login')
    }, []);

    return (
        <div>
            <h1>Add Movie Page</h1>
        </div>
    )
}

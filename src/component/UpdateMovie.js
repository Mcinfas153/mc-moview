import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function UpdateMovie() {

    const history = useHistory();

    useEffect(() => {
        !localStorage.getItem('user') && history.push('login')
    }, []);

    return (
        <div>
            <h1>Update Product Page</h1>
        </div>
    )
}

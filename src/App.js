import React, { useState, useEffect } from 'react';

//Components
import Header from './components/Header';
import EmailBar from './components/EmailBar';
import PhotoBar from './components/PhotoBar';
import DescriptionBar from './components/DescriptionBar';

function App () {

    const [state, setState] = useState([]);

    const fetchApi = async () => {
        const res = await fetch('http://landing-page-app.test/api/email')
        const data = res.json();

        console.log(data);
    }

    useEffect(() => {
        fetchApi()
    },[])

    return (
        <>
            <Header />
            <EmailBar />
            <PhotoBar />
            <DescriptionBar />
        </>
    )
};

export default App;

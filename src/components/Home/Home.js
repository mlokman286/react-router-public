import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.countrys))
    }, [])
    const headingStyle = {
        textAlign: 'center',
        height: '250px',
        marginTop: '-200px',
        alignItems: 'center',
        color: "white",
        fontSize: '5rem',
        fontFamily: "cursive"

    }
    return (
        <div>
            <div className="container">
                <h1 style={headingStyle}>Legendary Leagues</h1>
                <div className="row">
                    {
                        leagues.map(league => <League key={league.idLeague} league={league} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
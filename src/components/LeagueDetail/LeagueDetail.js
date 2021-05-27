import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faFlag, faMale, faFemale, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { Twitter, YouTube } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const LeagueDetail = () => {
    const { idLeague } = useParams()

    const [league, setLeague] = useState({})

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    const imgStyle = {
        backgroundColor: 'hsla(0, 0%, 83%, 0.7)',
        textAlign: 'center',
        position: 'relative',
        marginTop: '-300px',
        padding: '50px'
    }
    const iconStyle = { fontSize: 40 }

    let { strBadge, strLeague, dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube } = league
    const imgMale = 'https://raw.githubusercontent.com/ProgrammingHero1/sports-mania/main/Photo/Rectangle%2028.png'
    const imgFemale = 'https://raw.githubusercontent.com/ProgrammingHero1/sports-mania/main/Photo/female.png'

    const history = useHistory()
    return (
        <div>
            <div style={imgStyle}>
                <img style={{ width: '200px' }} src={strBadge} alt="" />
            </div>
            <br />
            <div style={{ borderRadius: '20px' }} className='bg-primary text-light container p-3'>

                <div className='row'>

                    <div className='col-md-6'>
                        <h2>{strLeague}</h2>
                        <div>
                            <p><FontAwesomeIcon icon={faSearchLocation} /> Founded: {dateFirstEvent}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={strGender === "Male" ? faMale : faFemale} /> Gender: {strGender}</p>
                            <br />

                            <Button onClick={() => history.push('/')} variant="contained" color="secondary">
                                <ArrowBackIcon /> Back to Home
                            </Button>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <img className='container-fluid' src={strGender === "Male" ? imgMale : imgFemale} alt="" />
                    </div>

                </div>
            </div>
            <br />

            <div className='container'>
                <p>
                    {strDescriptionEN}
                </p>

                {/* social icons */}
                <div className='text-center'>
                    <h1 >
                        <a href={`https://${strFacebook}`}><FacebookIcon color="primary" style={iconStyle} />  </a>
                        <a href={`https://${strTwitter}`}><Twitter style={{ color: "cyan", fontSize: "40px" }} /> </a>
                        <a href={`https://${strYoutube}`}><YouTube color='secondary' style={iconStyle} /> </a>
                    </h1>
                </div>
            </div>

        </div>
    );
};

export default LeagueDetail;
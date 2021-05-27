import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


const League = (props) => {

    const { strLeague, strSport, idLeague, strBadge } = props.league
    const history = useHistory()
    return (
        <div className='col'>
            <Card className="m-3 p-4 shadow text-dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="container-fluid" src={strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        Sport Type: {strSport}
                    </Card.Text>
                    <Button onClick={() => history.push(`/league/${idLeague}`)} variant="primary">
                        Explore <ArrowForwardIcon />
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default League;
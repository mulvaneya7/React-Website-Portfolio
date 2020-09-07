import React from 'react';
import { Grid, Cell } from 'react-mdl';

const AboutMe = () => {
    return(
        <div style={{width: '80%', margin: 'auto'}}>
            <Grid className="aboutme-grid">
                <Cell col={4}>5</Cell>
                <Cell col={4}>4</Cell>
                <Cell col={4}>4</Cell>
            </Grid>
        </div>
    )
}

export default AboutMe;
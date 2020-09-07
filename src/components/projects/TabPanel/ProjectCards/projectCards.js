import React from 'react';
import { Container, Grid } from '@material-ui/core';

import ProjectCard from '../ProjectCard/projectCard';

const ProjectCards = props => {
    const {proj1Title, proj2Title, proj3Title} = props;
    return(
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={6} lg={2}>
                <ProjectCard projectName={proj1Title} projectText="dummy text"/>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
                <ProjectCard projectName={proj2Title} projectText="dummy text2" />
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
                <ProjectCard projectName={proj3Title} projectText="dummy text3" />
            </Grid>
        </Grid>
        
    )
    
}


export default ProjectCards;
import React from 'react';
import { Card, CardContent, Grid, Button, Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    justifyCenter:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }  
}))

const JobItem = ({job}) => {
    const classes = useStyle();
    return (
        <Grid container spacing={9}>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={4} sm={3} className={classes.justifyCenter}>
                                <div 
                                style={{width:'120px',
                                height:'50px',
                                backgroundImage:`url(${job.logo})`,backgroundSize:'contain'
                                ,backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} ></div>

                            </Grid>
                            <Grid item xs={6} sm={7}>
                                <Typography variant="h5">{job.position}</Typography>
                                <Typography variant="caption">{job.company} | {job.location} | {job.experience}</Typography>
                                <Typography variant="subtitle1"><strong>Skills:</strong> {job.skills.map(skill => <span key={skill}>{skill}, </span>)}</Typography>
                            </Grid>
                            <Grid item xs={2}className={classes.justifyCenter}>
                                <Button color="primary" variant="outlined" >Apply</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
        
    )
}

export default JobItem

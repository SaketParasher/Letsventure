import React,{ useState } from 'react'

import { 
    Card, CardContent, Button,
    Grid, TextField, FormGroup,
    FormControlLabel, Checkbox, Switch, ButtonGroup } from '@material-ui/core';

const Filter = (props) => {

    const [currentChecked,setCurrentChecked] = useState('All');
    const [advanceFilter,setAdvanceFilter] = useState(false);
    const [filterBy,setFilterBy] = useState(null);
    const [keyword,setKeyword] = useState(null);
    
    const handleChange = (e) => {
        setCurrentChecked(e.target.name);
        props.onTypeChange(e.target.name);
    
    }

    const handleAdvanceFiler = (e) => {
        setAdvanceFilter(prevState => {
            if(prevState === true){
                setFilterBy(null);
                props.onKeywordChange(keyword)
                props.onFilterByChange(null);
            }
            
            return !prevState
        });

    }

    const handleKeywordChange = (e) => {
        const value = e.target.value !== '' ? e.target.value : null;
        setKeyword(value);
        
    }

    const handleSearchClick = (e) => {
        if(keyword !== null){
            props.onKeywordChange(keyword);
        }
    }

    const handleFilterByChange = (e) => {
        const target = e.target.name ? e.target : e.target.closest('button');
        setFilterBy(target.name);
        props.onKeywordChange(keyword);
        props.onFilterByChange(target.name);
    }


    return (
        <Grid container spacing={9}>
            <Grid item xs={12}>
                <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={3}><TextField onChange={handleKeywordChange} value={keyword === null ? '':keyword} variant="outlined" placeholder="Search By Keyword"/></Grid>
                    <Grid item xs={7}>
                        <FormGroup row>
                        
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={currentChecked === "All"}
                                onChange={handleChange}
                                name="All"
                                color="secondary"
                            />
                            }
                            label="All"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={currentChecked === "Full Time"}
                                onChange={handleChange}
                                name="Full Time"
                            
                            />
                            }
                            label="Full-Time"
                        />

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={currentChecked === "Part Time"}
                                onChange={handleChange}
                                name="Part Time"
                                
                            />
                            }
                            label="Part-Time"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={currentChecked === "Freelancer"}
                                onChange={handleChange}
                                name="Freelancer"
                            
                            />
                            }
                            label="Freelancer"
                        />
                        
                        
                        </FormGroup>
                    </Grid>
                    <Grid item xs={2}><Button variant="contained" color="secondary" onClick={handleSearchClick}>Search</Button></Grid>
                    
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Switch checked={advanceFilter} onChange={handleAdvanceFiler} name="advancefilter" />}
                                    label="Advance Filter"
                                />
                            </FormGroup>
                        </Grid>
                        {advanceFilter && <Grid item xs={12} style={{textAlign:'left'}}>
                            <ButtonGroup size="large" color="secondary">
                                <Button variant={filterBy === 'location' ? 'contained' : 'outlined'} name="location" onClick={handleFilterByChange}>Filter By Location</Button>
                                <Button variant={filterBy === 'experience' ? 'contained' : 'outlined'} name="experience" onClick={handleFilterByChange}>Filter By Experience</Button>
                            </ButtonGroup>
                        </Grid>}
                    </Grid>
                    

                </CardContent>
            </Card>
                
            </Grid>
            
        </Grid>
    )
}

export default Filter

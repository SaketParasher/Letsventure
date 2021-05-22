import React, { useEffect, useState } from "react";
import "./app.css";
import { Grid } from '@material-ui/core';
import axios from 'axios';

import JobList from './Components/JobList';
import Filters from './Components/Filter';
import AppBar from './Components/AppBar';

const App = () => {
  const [error,setError] = useState(false);
    const [jobs,setJobs] = useState([]);
    const [typeFilter,setTypeFilter] = useState('All');
    const [keyword,setKeyword] = useState(null);
    const [filterBy,setFilterBy] = useState(null);

    useEffect(() => { 
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`/api/getJobs?type=${typeFilter}&keyword=${keyword}&filterBy=${filterBy}`);
                const jobs = response.data.allJobs;
                setJobs(jobs);
            } catch (error) {
                setError(true);
            }
            
        }
        fetchJobs();
    },[typeFilter,keyword,filterBy])

    const handleTypeFilterChange = (type) => {
        setTypeFilter(type);
    }

    const handleKeywordChange = (keyword) => {
      setKeyword(keyword);
    }

    const handleFilterByChange = (filterBy) => {
      setFilterBy(filterBy);
    }

    return (
      <>
      <AppBar/>
      <Grid container spacing={10} style={{marginTop:'35px'}}>
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={12} md={10}>
            <Filters 
              onTypeChange={handleTypeFilterChange}
              onKeywordChange={handleKeywordChange}
              onFilterByChange={handleFilterByChange}

            />
            {error && <h3>Can't load jobs. Please try later.</h3>}
            {!error && <JobList jobs={jobs}/>}
        </Grid>
        <Grid item xs={false} md={1}></Grid>
        
      </Grid>
      </>
    );
  
}

export default App;

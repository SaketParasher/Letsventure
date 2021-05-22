const Job = require('./models/Job');

exports.getAllJobs = async (req,res,next) => {
    try {
        const { type, keyword, filterBy  } = req.query;
        console.log(`type :- ${typeof filterBy} key :- ${keyword} filter: ${filterBy}`)
        const queryObj = {};
        let allJobs;
        if(type != "All"){
            queryObj["type"] = type
        }
        if(keyword != 'null' && filterBy == 'null'){
            console.log("Inside 1")
            queryObj["position"] = { $regex: new RegExp(keyword,'i') } 
        }
        if(keyword != 'null' && filterBy != 'null'){
            console.log("Inside 2");
            queryObj[filterBy] = { $regex: new RegExp(keyword,'i') };
        }
        console.log(queryObj);
        allJobs = await Job.find(queryObj)
        
        
        res.json({allJobs});
    } catch (error) {
        console.log("Error while fetching all jobs ",error);
        return res.json({error:error.message});
    }
} 
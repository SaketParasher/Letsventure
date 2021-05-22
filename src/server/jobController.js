const Job = require('./models/Job');

exports.getAllJobs = async (req,res,next) => {
    try {
        const { type, keyword, filterBy  } = req.query;
        const queryObj = {};
        let allJobs;
        if(type != "All"){
            queryObj["type"] = type
        }
        if(keyword != 'null' && filterBy == 'null'){
            
            queryObj["position"] = { $regex: new RegExp(keyword,'i') } 
        }
        if(keyword != 'null' && filterBy != 'null'){
            queryObj[filterBy] = { $regex: new RegExp(keyword,'i') };
        }
        allJobs = await Job.find(queryObj).sort({createdAt:-1})
        
        
        res.json({allJobs});
    } catch (error) {
        return res.json({error:error.message});
    }
} 
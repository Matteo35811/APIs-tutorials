const User = require('../models/User');  
// newTea function for post tea route
//POST tea
const newUser = (req, res) => {
    //check if the tea name already exists in db
    Tea.findOne({ name: req.body.name }, (err, data) => {

        //if tea not in db, add it
        if (!data) {
            //create a new tea object using the Tea model and req.body
            const newUser = new User({
                name: req.body.name,
                image: req.body.image, // placeholder for now
                description: req.body.description,
                keywords: req.body.keywords,
                origin: req.body.origin,
                brew_time: req.body.brew_time,
                temperature: req.body.temperature,
            })

            // save this object to database
            newUser.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.json(data);
            })
            //if there's an error or the tea is in db, return a message         
        } else {
            if (err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({ message: "User already exists" });
        }
    })
};


//GET all teas
const getAllUser = (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            return res.json({ Error: err });
        }
        return res.json(data);
    })
};

//DELETE teas
const deleteAllUser = (req, res) => {
    User.deleteMany({}, err => {
        if (err) {
            return res.json({ message: "Complete delete failed" });
        }
        return res.json({ message: "Complete delete successful" });
    })
};

const getOneUser = (req, res) => {
    let name = req.params.name; //get the tea name

    //find the specific tea with that name
    Tea.findOne({ name: name }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Tea doesn't exist." });
        }
        else return res.json(data); //return the tea object if found
    });
};


//DELETE '/tea/:name'
const deleteOneUser = (req, res, next) => {

    // Query for a tea that has name
    let UserName = req.params.name;
    var query = { name: UserName };

    const result = User.deleteOne(query);
    User.deleteOne(query, (err, collection) => {
        if (err) {
            throw err;
        }
        else {
            console.log("User deleted successfully");
            res.json({ message: "DELETE 1 User" });
        }

    });


};






//export controller functions
module.exports = {
    getAllUser,
    newUser,
    deleteAllUser,
    getOneUser,
    deleteOneUser
};

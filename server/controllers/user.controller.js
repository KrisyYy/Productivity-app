const db = require("../models/index");
const User = db.users;

exports.getUser = (req, res) => {
    User.findByPk(req.params.id)
    .then(data => {
        if (data) {
            res.send(data);
        }
        else 
            res.send({
                message: "User not found"
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        })
    })
}

// TODO create category
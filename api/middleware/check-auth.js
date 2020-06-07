const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        // console.log("token11: ", token);
        // console.log("token22: ", req.body.token);
        const decoded = jwt.verify(token, "secret");
        req.userData = decoded;
    } catch (error) {
        // console.log("token22: ", req.body.token);
        return res.status(401).json({
            message: "Auth failed2"
        });
    }
    next();
};

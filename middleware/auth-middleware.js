const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization; // Bearer 
    const token = authorization?.split(' ')[1];

    if(!token){
        res.status(401).send("Unauthorized");
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.id;

        next();

    } catch (err) {
        console.error(err);
        res.status(401).send("No authorized");
    }
};

module.exports = authMiddleware;
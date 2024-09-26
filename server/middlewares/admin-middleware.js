export const adminMiddleware = async (req, res, next) => {
    try {
        // console.log("Data inside adminMiddleware Request is :" , req);
        // console.log("Data inside adminMiddleware Request is :" , req.userxx);
        // console.log("IS Admin hai ya nhi :" , req.userxx.isAdmin);
        // Upper console logs are just the Checking

        const isAdmin = req.userxx.isAdmin;

        if(!isAdmin) {
            res.status(403).send({message: "Failed to access the data Because Current User is not an Admin"});
        }

        next();
        
    } catch (error) {
        next(error);
    }
}
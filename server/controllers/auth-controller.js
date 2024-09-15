



// Home-Page Controller
const homePageController = async (req, res) => {
    try {

        res.status(200).send("<h1>Home Page using Controller</h1>")

    } catch (error) {

        console.log(error);
        
    }
}



// Registration Controller
const registerPageController = async (req, res) => {
    try {
        const requestedData = req.body;
        // console.log(requestedData);  // testing purpose
        res.status(2Ex00).send({
            data: requestedData,
        })

    } catch (error) {

        console.log(error);
        
    }
}




export {homePageController, registerPageController};
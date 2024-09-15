



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

        res.status(200).send("<h1>Register Page using Controller</h1>")

    } catch (error) {

        console.log(error);
        
    }
}




export {homePageController, registerPageController};
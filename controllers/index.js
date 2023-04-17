//defining the home controller function
function home(req, res) {
    res.render('index', {title: 'Mongoose Movies'});
}

//export controller function sso that it's functionality can be accessed by other modules
module.exports = {
    home
};
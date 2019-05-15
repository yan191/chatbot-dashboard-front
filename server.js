//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/dashboard'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/dashboard/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
    });
var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    // set NZ timezone (change as needed for your purposes)
    currentTime.setTimezone("Pacific/Auckland");
    callback(null, {
        statusCode: '200',
        body: 'The time in Auckland is: ' + currentTime.toString(),
    });
};

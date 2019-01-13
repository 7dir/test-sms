var app = {
    checkSMSPermission: function() {
        var success = function (hasPermission) { 
            if (hasPermission) {
                sms.send(...);
            }
            else {
                // show a helpful message to explain why you need to require the permission to send a SMS
                // read http://developer.android.com/training/permissions/requesting.html#explain for more best practices
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    },
    requestSMSPermission: function() {
        var success = function (hasPermission) { 
            if (!hasPermission) {
                sms.requestPermission(function() {
                    console.log('[OK] Permission accepted')
                }, function(error) {
                    console.info('[WARN] Permission not accepted')
                    // Handle permission not accepted
                })
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    }
};

// var app = {
//     sendSms: function() {
//         var number = document.getElementById('numberTxt').value.toString(); /* iOS: ensure number is actually a string */
//         var message = document.getElementById('messageTxt').value;
//         console.log("number=" + number + ", message= " + message);

//         //CONFIGURATION
//         var options = {
//             replaceLineBreaks: true, // true to replace \n by a new line, false by default
//             android: {
//                 // intent: 'INTENT'  // send SMS with the native android SMS messaging
//                 intent: '' // send SMS without opening any other app
//             }
//         };

//         var success = function () { alert('Message sent successfully'); };
//         var error = function (e) { alert('Message Failed:' + e); };
//         sms.send(number, message, options, success, error);
//     }
// };
// // document.addEventListener("deviceready", init, false);
// // function init() {

// //     document.querySelector("#sendMessage").addEventListener("touchend", function() {
// //         console.log("click");
// //         var number = document.querySelector("#number").value;
// //         var message = document.querySelector("#message").value;
// //         console.log("going to send "+message+" to "+number);

// //         //simple validation for now
// //         if(number === '' || message === '') return;

// //         var msg = {
// //             phoneNumber:number,
// //             textMessage:message
// //         };

// //         sms.sendMessage(msg, function(message) {
// //             console.log("success: " + message);
// //             navigator.notification.alert(
// //                 'Message to ' + number + ' has been sent.',
// //                 null,
// //                 'Message Sent',
// //                 'Done'
// //             );

// //         }, function(error) {
// //             console.log("error: " + error.code + " " + error.message);
// //             navigator.notification.alert(
// //                 'Sorry, message not sent: ' + error.message,
// //                 null,
// //                 'Error',
// //                 'Done'
// //             );
// //         });

// //     }, false);

// // }
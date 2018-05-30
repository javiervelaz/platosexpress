angular.module('app.service.mail',[])
       .factory('Mandrill',Sendmail)
Sendmail.$inject = ['$http', 'myConfig'];

function Sendmail($http,myConfig){
    var fromEmail = 'javier';
    var fromName = 'email_name';
    var toEmail = 'javiervelaz@hotmail.com'
    var toName = 'email_name'
    var replyTo = 'javiervelaz@hotmail.com';
    
     return {
                    errorMsg: function (resp) {
                        return $http.post('https://mandrillapp.com/api/1.0//messages/send.json', {
                            'key': myConfig.mandrilKey,
                            'message': {
                                'html': '<p>Unknown Error Message</p><p>' + resp + '</p><p>Error Code:' + resp.code + '</p>',
                                'text': resp,
                                'subject': 'Unknown Error Message',
                                'from_email': fromEmail,
                                'from_name': fromName,
                                'to': [
                                    {
                                        'email': toEmail,
                                        'name': toName,
                                        'type': 'to'
                                    }
                                ],
                                'headers': {
                                    'Reply-To': replyTo
                                }
                            }
                        })
                                .success(function (data, status, headers, config) {
                                    // log success
                                    console.log('success');
                                });
                    }
                };
    
    //return myConfig.mandrilKey;
}
       



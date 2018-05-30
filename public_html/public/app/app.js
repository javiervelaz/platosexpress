angular
        .module('app', ['app.services', 'firebase','ngRoute',  'jkuri.datepicker','ngMaterial','validation','uiSwitch','angularUtils.directives.dirPagination','ui-notification','ngCart','restapi','ngResource','gm','cgBusy'])
        .constant('myConfig', {
            'url': 'https://digitalstarfood.firebaseio.com/',
            'token': 'ogZTN2ZvnxxUZ6sYMyPFpi8IvaCYu0YeKmxfH3aF',
            //prod
//            'url': 'https://platosexpressprod.firebaseio.com/',
//            'token': 'AIzaSyD32MacHJXK0dnIT3BHZO2y8y9OgjgkFgk',
        })
        



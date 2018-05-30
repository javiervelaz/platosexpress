angular
        .module('app', ['app.services', 'firebase', 'ngRoute',  'jkuri.datepicker','ngMaterial','validation','uiSwitch','angularUtils.directives.dirPagination','ui-notification','ngCart','ngResource'])
        //.module('app', ['firebase','app.services','ngRoute','ngCart','ui-notification'])
        .constant('myConfig', {
            'url': 'https://digitalstarfood.firebaseio.com/',
            'token': 'ogZTN2ZvnxxUZ6sYMyPFpi8IvaCYu0YeKmxfH3aF',
            'mandrilKey': 'aaf988b870cd33971a640a7e655a5f26-us13'
        })
        



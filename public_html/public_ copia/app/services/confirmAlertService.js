(function () {
    'use strict';

    angular
        .module('app')
        .factory('confirmAlert', confirmAlert);

    confirmAlert.$inject = ['$mdDialog'];

    function confirmAlert($mdDialog) {

        var service = {
            confirmBoxResponse: confirmBoxResponse
        };

        return service;

        ////////////////////////////Implementation//////////////////////////////////////

        function confirmBoxResponse(msgValid) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                //targetEvent: $event,
                title: 'Errores',
                template:
                        '<div class="center" tabindex="-1" role="dialog" aria-hidden="true">'+
                            '<div class="">'+
                                '<div class="modal-content">'+
                                    '<div  class="modal-header">    {{titulo}}  </div> '+
                                    '<div class="modal-body">' +
                                    '    <md-list>' +
                                    '      <md-list-item ng-repeat="item in items">' +
                                    '       <p>{{item}}</p>' +
                                    '      ' +
                                        '    </md-list-item></md-list>' +
                                    '</div>'+
                                    '<div class="modal-footer">'+
                                        '<md-button ng-click="closeDialog()" class="btn btn-danger">' +
                                            'Cerrar' +
                                        '</md-button>' +
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>',
                locals: {
                    items: msgValid
                },
                controller: DialogController
            });
            function DialogController($scope, $mdDialog, items) {
                $scope.items = items;
                $scope.titulo = 'Campos incorrectos:';
                $scope.closeDialog = function () {
                    $mdDialog.hide();
                }
            }
        }

    }

})();
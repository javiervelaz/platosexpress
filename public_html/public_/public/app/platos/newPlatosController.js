angular
        .module('app')
        .controller('newPlatosController', newPlatos);

newPlatos.$inject = ['$http', '$scope', 'SystemUser', 'platosData', '$location', 'model', 'fileUpload', 'Notification', 'errorHandler', '$firebaseObject', 'platoDomain'];

function newPlatos($http, $scope, SystemUser, dataService, $location, modelPlatos, FileUploader, Notification, errorHandler, $firebaseObject, platoDomain) {
    var domain = 'platos';
    var dataPlato = platoDomain.get;
    $scope.files = [];
    $scope.imagesPrev = [];
    $scope.uploadme = {};
    $scope.uploadme.src = '';
    SystemUser.onAuth(function (authData) {
        $scope.UserUid = authData.uid;
    });
     $scope.delivery = false

    // GET THE FILE INFORMATION.
    $scope.getFileDetails = function (e) {

        $scope.files = [];
        var reader = new FileReader();
        $scope.$apply(function () {
            // STORE THE FILE OBJECT IN AN ARRAY.
            for (var i = 0; i < e.files.length; i++) {
                $scope.files.push(e.files[i])
            }

        });
    };

    // NOW UPLOAD THE FILES.
    $scope.uploadFiles = function () {

        //FILL FormData WITH FILE DETAILS.
        var data = new FormData();
        var arr;
        for (var i in $scope.files) {
            //data.append("uploadedFile", $scope.files[i]);
            //console.log($scope.files[i]);
        }

        // ADD LISTENERS.
        var objXhr = new XMLHttpRequest();
        objXhr.addEventListener("progress", updateProgress, false);
        objXhr.addEventListener("load", transferComplete, false);

        // SEND FILE DETAILS TO THE API.
        objXhr.open("POST", "upload.php");

        var uploadUrl = 'upload.php';
        //FileUploader.uploadFileToUrl(data, uploadUrl);

        objXhr.send(data);

    }

    Date.prototype.yyyymmdd = function () {
        var yyyy = this.getFullYear().toString();
        var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based         
        var dd = this.getDate().toString();

        return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]);
    };

    function callBack(param) {
        vm.result = param;
    }

    //console.log(dataService.getTipoCocina(domain));
    $scope.semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    $scope.ComidaList = $firebaseObject(modelPlatos.list('cocina'));
    $scope.tipoComidaList = $firebaseObject(modelPlatos.list('tipoComida'));
    $scope.tipoComida = {
        tipo: null,
        multipleSelect: [],
        option1: 'option-1',
    };
    //cantidad porciones
    $scope.cantPorciones = {
        porciones: null,
        multiselect: [],
    };
    //cocina
    $scope.tipoCocina = {
        cocina: null,
        multiselect: ['9'],
    };
    // selected fruits
    $scope.selectionDias = [];

    $scope.toogleSelection = function toogleSelection(dias) {
        var idx = $scope.selectionDias.indexOf(dias);

        if (idx > -1) {
            $scope.selectionDias.splice(idx, 1);
        } else {
            $scope.selectionDias.push(dias);
        }

    }

    $scope.SavePlato = function () {
        if ($scope.platoForm.$valid) {
            var path = 'uploads/' + $scope.UserUid;

            if ($scope.files.length == 0) {
                Notification.error("Falta una foto de tu plato!")
                return false;
            }

            //var fechadesde = new Date($scope.platoForm.startDate.$modelValue).getTime();
            //var fechahasta = new Date($scope.platoForm.fechaHasta.$modelValue).getTime();

            dataPlato.nombre = $scope.nombre,
                    dataPlato.descripcion = $scope.descripcion,
                    //dataPlato.tipo = $scope.tipoComida.tipo,
                    dataPlato.precio = $scope.precio,
                    dataPlato.cantidad_disponible = $scope.cantPorciones.porciones,
                    //dataPlato.cocina = $scope.tipoCocina.tipo,
                    dataPlato.dias = $scope.selectionDias,
                    //dataPlato.horarioEntrega = $scope.horarioEntrega,
                    //dataPlato.fechaDesde = fechadesde,
                    dataPlato.delivery = $scope.delivery,
                    dataPlato.id_usuario = $scope.UserUid,
                    dataPlato.estado = true,
                    console.log($scope.files[0]['name']);

            var platoid = dataService.savePlato(domain, dataPlato);
            if (platoid) {
                var data = new FormData();

                var uploadUrl = 'upload.php';
                for (var i in $scope.files) {
                    data.append(i, $scope.files[i]);

                }

                var filedata = {
                    imgFiles: $scope.files,
                    user: $scope.UserUid,
                    plato: platoid
                };
                var img = path + '/' + platoid + '/' + $scope.files[0]['name']
                dataService.updateImgPath(platoid, img, 'urlPath')
                FileUploader.uploadFileToUrl(filedata, uploadUrl);
                Notification.success("Plato guardado correctamente")
                $location.path('/');
            }
        } else {
            var error = $scope.platoForm.$error;
            $scope.msgValid = [];
            angular.forEach(error, function (value, key) {
                angular.forEach(value, function (field) {
                    if (field.$invalid) {
                        $scope.msgValid.push(field.$name);
                        console.log(field.$name)
                        Notification.error(errorHandler.message(field.$name));
                    }
                });
            });

        }

    }
}
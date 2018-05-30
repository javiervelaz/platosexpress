angular
        .module('app')
        .service('fileUpload', ['$http', function ($http) {
                this.uploadFileToUrl = function (file, uploadUrl) {
                    var fd = new FormData();
                    for (var i in file.imgFiles) {
                        fd.append(i, file.imgFiles[i]);
                        //console.log(file.imgFiles[i]);
                    }
                    //fd.append('files', fd);
                    fd.append('user', file.user);
                    fd.append('plato', file.plato);
                  
                    $http.post(uploadUrl, fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })
                            .success(function (data) {
                                alert(data);
                            })
                            .error(function (datae) {
                                alert(datae);
                            });
                }
            }]);



(function () {
    'use strict';

    angular
            .module('app')
            .factory('$pageArray', pagination);

    pagination.$inject = ['$firebaseArray'];

    function pagination($firebaseArray) {

        var service = {
            pag: pag
        };

        return service;

        ////////////////////////////Implementation//////////////////////////////////////

        function pag(ref, field) {
            var pageRef = new Firebase.util.Paginate(ref, field, {maxCacheSize: 250,pageSize: 100})
            var list = pageRef
            list.page = pageRef.page;
            
            // when the page count loads, update local scope vars
            pageRef.page.onPageCount(function (currentPageCount, couldHaveMore) {
                list.pageCount = currentPageCount;
                list.couldHaveMore = couldHaveMore;
            });

            // when the current page is changed, update local scope vars
            pageRef.page.onPageChange(function (currentPageNumber) {
                list.currentPageNumber = currentPageNumber;
            });
           
            // load the first page
            pageRef.page.next();
            
            return list
        }

    }

})();
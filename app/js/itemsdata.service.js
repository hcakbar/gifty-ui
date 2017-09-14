(function () {
    var app = angular.module("GiftyUi");

    app.service("ItemsDataSvc", function ($http) {
        var self = this;

        self.getItems = function () {
            var promise1 = $http.get('http://localhost:8080//product/v1/all');
            var promise2 = promise1.then(function (response) {
                return response.data;
            });
            return promise2;
        }
    });
})();
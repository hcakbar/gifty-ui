(function () {
    var app = angular.module("GiftyUi");
    app.controller("GiftyUiCtrl", GiftyUiCtrl);

    function GiftyUiCtrl(ItemsDataSvc) {
        var self = this;
        ItemsDataSvc.getItems()
            .then(function (data) {
                self.items = data;
            })

        this.selectItem = function (index) {
            this.selectedItem = this.items[index];
        }
    }
})();
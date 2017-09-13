(function () {
    var app = angular.module("GiftyUi");
    app.controller("GiftyUiCtrl", GiftyUiCtrl);

    function GiftyUiCtrl(ItemsDataSvc) {
        this.items = ItemsDataSvc.items;
        this.selectedItem = this.items[0];
        this.selectedItem = function (index) {
            this.selectedItem = this.items[index];
        }
    }
})();
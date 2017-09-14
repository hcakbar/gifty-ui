(function () {
    var app = angular.module("GiftyUi");
    app.controller("GiftyUiCtrl", GiftyUiCtrl);

    function GiftyUiCtrl(ItemsDataSvc) {
        this.items = ItemsDataSvc.items;

        this.selectItem = function(index) {
            this.selectedItem = this.items[index];
        }
    }
})();
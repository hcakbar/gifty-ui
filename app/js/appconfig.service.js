(function () {
    var app = angular.module("GiftyUi");
    app.service("AppDataServiceSvc", function (AppNameSvc) {    //few ways can use data service: factory, constant, or service
        this.appName = AppNameSvc;
        this.authors = ["Abc", "Xyz"];
        this.company = "Gifty";
        this.version = "0.0.1";
        this.date = new Date().toDateString();
    });
})();
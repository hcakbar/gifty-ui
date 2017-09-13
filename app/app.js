var app = angular.module("GiftyUi", []);
app.controller("HeaderCtrl", HeaderCtrl);
app.controller("FooterCtrl", FooterCtrl);

function HeaderCtrl(AppDataServiceSvc) {
    this.appTitle = AppDataServiceSvc.appName;
    this.headerContent = "[Header contents]";
}

function FooterCtrl(AppDataServiceSvc) {
    this.author = AppDataServiceSvc.authors;
    this.company = AppDataServiceSvc.company;
    this.version = AppDataServiceSvc.version;
    this.footerContent = "[Footer contents]";
    this.date = new Date().toDateString();
}


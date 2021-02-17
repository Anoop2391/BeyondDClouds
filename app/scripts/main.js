var app = angular.module('campingApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/home", {
            templateUrl: '../modules/components/home/app.component.home.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
        })
        .otherwise({ redirectTo: '/home' });
}]);

app.controller('MainController', ['$scope', function($scope) {
    var mainCtrl = this;

    function getBannerArray(length) {
        var bannerArray = [];
        for (var i = 1; i <= length; i++) {
            var url = ('../assets/images/banner' + i + '.jpg');
            bannerArray.push({ url: url });
        }
        return bannerArray;
    }
    mainCtrl.bannerArray = getBannerArray(10);
}]);

app.controller('HeaderController', ['$scope', function($scope) {
    var headerCtrl = this;

    setTimeout(function() {
        $("#slider3").responsiveSlides({
            auto: true,
            pager: true,
            nav: false,
            speed: 500,
            namespace: "callbacks",
            before: function() {
                $('.events').append("<li>before event fired.</li>");
            },
            after: function() {
                $('.events').append("<li>after event fired.</li>");
            }
        });

        $(".scroll").click(function(event) {
            event.preventDefault();

            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);
        });
    }, 1);
}]);

app.component('homeComponent', {
    templateUrl: 'modules/components/home/app.component.home.html'
});

app.component('aboutComponent', {
    templateUrl: 'modules/components/about/app.component.about.html'
});

app.component('portfolioComponent', {
    templateUrl: 'modules/components/portfolio/app.component.portfolio.html'
});

app.component('headerComponent', {
    templateUrl: 'modules/components/header/app.component.header.html',
    controller: 'HeaderController',
    controllerAs: 'headerCtrl'
});

app.component('serviceComponent', {
    templateUrl: 'modules/components/services/app.component.services.html'
});

app.component('teamComponent', {
    templateUrl: 'modules/components/team/app.component.team.html'
});

app.component('footerComponent', {
    templateUrl: 'modules/components/footer/app.component.footer.html'
});

app.component('blogComponent', {
    templateUrl: 'modules/components/blog/app.component.blog.html'
});

app.component('packagesComponent', {
    templateUrl: 'modules/components/packages/app.component.packages.html'
});

app.component('contactComponent', {
    templateUrl: 'modules/components/contact/app.component.contact.html'
});
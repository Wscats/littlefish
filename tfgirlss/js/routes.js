;
(function() {
	var routes = angular.module("routes", []);
	routes.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider.state("index", {
			url: "/index",
			templateUrl: "template/index.html",
		}).state("index.home", {
			url: "/home",
			templateUrl: "template/home.html",
		}).state("index.contacts", {
			url: "/contacts",
			templateUrl: "template/contacts.html"
		}).state("detail", {
			url: "/detail/:id",
			templateUrl: "template/detail.html"
		})
		$urlRouterProvider.when("", "/index/home")
	}])
})();
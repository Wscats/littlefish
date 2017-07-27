;
(function() {
	var filters = angular.module("filters", [])
	filters.filter("html", ["$sce", function($sce) {
		return function(input) {
			return $sce.trustAsHtml(input);
		}
	}])
})();
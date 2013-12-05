angular.module('app.directive.scrollSpy',[])
    .directive('scrollSpy', function($timeout){
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                var offset = parseInt(attr.scrollOffset, 10);
                if(!offset) offset = 10;
                elem.scrollspy({ "offset" : offset + 80});
                scope.$watch(attr.scrollSpy, function(value) {
                    $timeout(function() {
                        elem.scrollspy('refresh', { "offset" : offset})
                    }, 1000);
                }, true);
            }
        }
    });
angular.module('app.directive.scrollOnMenuClick',[])
    .directive('scrollOnMenuClick', function() {
        return {
            restrict: 'A',
            link: function(scope, $elm, attrs) {
                var idToScroll = attrs.href;
                $elm.on('click', function() {
                    var $target;
                    if (idToScroll) {
                        $target = $(idToScroll);
                    } else {
                        $target = $elm;
                    }
                    $('html,body').animate({scrollTop: $target.offset().top - 80});
                });
            }
        }
    });
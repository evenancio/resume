'use strict';

var App = angular.module('app.controller.feed', []);

App.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {
    $scope.init = function(uri)
    {
        Feed.parseFeed(uri).then(function(res){
            var feeds =  res.data.responseData.feed.entries;
            $scope.feeds= feeds;

        });
    };
}]);

App.factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);
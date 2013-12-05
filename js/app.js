angular.module('app', [
        'ui.bootstrap',
        'app.controller.feed',
        'app.directive.scrollOnClick',
        'app.directive.scrollOnMenuClick',
        'app.directive.scrollSpy'
    ]);

function IndexController($scope){
    $scope.partials = [
        {url: "partials/header.html" },
        {url: "partials/home.html" },
        {url: "partials/about.html" },
        {url: "partials/skills.html" },
        {url: "partials/resume.html" },
        {url: "partials/works.html" },
        {url: "partials/feed.html" },
        {url: "partials/certificates.html" },
        {url: "partials/contact.html" },
        {url: "partials/footer.html" }
    ];
}

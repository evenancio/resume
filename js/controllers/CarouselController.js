/**
 * Created with JetBrains WebStorm.
 * User: svg8760
 * Date: 31/08/13
 * Time: 17:27
 * To change this template use File | Settings | File Templates.
 */
angular.module('app.controller.carousel', ['ui.bootstrap']);

function CarouselCtrl($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
        {"title":"Application Development Foundation", "content":"Temos um vasto catálogo de doces personalizados. Você pode escolher os nossos modelos ou podemos criar conforme sua sugestão.", "button":"Confira o nosso catálogo", "image":"media/img/MCP.gif"},
        {"title":"Web-Based Client Development", "content":"Você pode ter diversas mesas secundárias espalhadas no local de sua festa. Conheça alguns modelos.", "button":"Conheça algumas mesas", "image":"media/img/mcts.gif"}
    ];
}
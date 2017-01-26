var app = angular.module('starter.controllers', [])

// Criação do angular controller e injeção ao angular scope
app.controller('mainCtrl', function ($scope, $http) {
    $scope.responseBody = {};
    $http.get('//prova.formahomolog.com.br/api/Destiny').success(function (data) {
        console.log(data);
        $scope.responseBody = data;
    });
});

app.controller('sobreCtrl', function ($scope, $http) {

});

app.controller('erroCtrl', function ($scope) {

});

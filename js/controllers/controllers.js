var app = angular.module('starter.controllers', [])

// Criação do angular controller e injeção ao angular scope
app.controller('mainCtrl', function ($scope, $http) {

});

app.controller('sobreCtrl', function ($scope, $http) {
    $scope.responseBody = {};
    $http.get('http://prova.formahomolog.com.br/api/Destiny').success(function (data) {
        console.log(data);
        $scope.responseBody = data;
    });
});

app.controller('contatoCtrl', function ($scope) {
    $scope.message = 'Olá! Você está na página de contato.';
});

app.controller('erroCtrl', function ($scope) {
    $scope.message = 'Erro 404. Você caiu no limbo.';
});

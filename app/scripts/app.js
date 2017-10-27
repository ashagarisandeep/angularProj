'use strict';


var app =angular.module('trainingProject', [
    'ngRoute',
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ]);
app.config(config);
config.$inject=['$stateProvider','$urlRouterProvider'];
function config($stateProvider,$urlRouterProvider){
        $stateProvider
           .state('posts',{
            url:'/posts',
            templateUrl:'views/main.html',
            controller:'MainCtrl'
            })
           .state('about',{
            url:'/about',
            templateUrl:'views/about.html',
            //controller:'AboutCtrl'
            })
           .state('page1',{
            url:'/page1',
            abstract: true,
            templateUrl:'views/page1content.html',
            controller:'page1controller'
            })
           .state('page1.1',{
            url:'/page1.1',
            templateUrl:'views/insidepage1.html',
            controller:'page1controller1'
              })

          
           .state('page1.2',{
            url:'/page1.2/:itemid/:itemname',

            templateUrl:'views/pageinside2.html',
            controller:'page1controller2'
            })
          /* .state('register',{
              url:'/register',
              templateUrl:'views/register.html',
              controller:'registerctrl'
            })
          .state('login',{
            url:'/login',
            templateUrl:'views/login.html',
            
           })*/
           .state('miniprojectpage',{
            url:'/miniprojectpage',
            abstract:true,
            templateUrl:'views/page2content.html',
            controller:'page2controller'
            })
           .state('miniprojectpage1',{
             url:'/miniprojectpage1',
             templateUrl:'views/page2.1content.html',
             controller:'miniProjectCtrl1'
           })
           .state('page2.2',{
             url:'/page2.2',
             templateUrl:'views/page2.2content.html',
             controller:'page2controller2'
           })
            $urlRouterProvider.otherwise('/posts');
}
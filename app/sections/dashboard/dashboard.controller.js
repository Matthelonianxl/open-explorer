(function () {
    'use strict';

    angular.module('app').controller('DashboardCtrl', ['$scope', '$timeout', '$window', 'networkService', 'chartService',  DashboardCtrl])

        .filter('to_trusted', ['$sce', function($sce){
            return function(text) {
                return $sce.trustAsHtml(text);
            };
        }]);

    function DashboardCtrl($scope, $timeout, $window, networkService, chartService) {

        networkService.getHeader(function (returnData) {
            $scope.dynamic = returnData;
        });

        networkService.getLastOperations(function (returnData) {
            $scope.operations = returnData;
        });

		chartService.topOperationsChart(function (returnData) {
            $scope.operations_chart = returnData;
        });

        chartService.topProxiesChart(function (returnData) {
            $scope.proxies = returnData;
        });

        chartService.topMarketsChart(function (returnData) {
            $scope.markets = returnData;
        });

        chartService.topSmartCoinsChart(function (returnData) {
            $scope.smartcoins = returnData;
        });

        chartService.topUIAsChart(function (returnData) {
            $scope.uias = returnData;
        });

        chartService.topHoldersChart(function (returnData) {
            $scope.holders = returnData;
        });

        // Todo: subscribe to updates

        // hack for the display chart problem
        $scope.showChart = function(chartToShow) {

            $timeout(function() {
                $window.dispatchEvent(new Event("resize"));
            }, 1000);

            if(chartToShow === 0) {
                $timeout(function() {
                    $window.dispatchEvent(new Event("resize"));
                }, 100);
            }
            else if(chartToShow === 1) {
                $timeout(function() {
                    $window.dispatchEvent(new Event("resize"));
                }, 100);
            }
            else if(chartToShow === 2) {
                $timeout(function() {
                    $window.dispatchEvent(new Event("resize"));
                }, 100);
            }
            else if(chartToShow === 3) {
                $timeout(function() {
                    $window.dispatchEvent(new Event("resize"));
                }, 100);
            }
            else if(chartToShow === 4) {
                $timeout(function() {
                    $window.dispatchEvent(new Event("resize"));
                }, 100);
            }
            else if(chartToShow === 5) {
                $timeout(function() {
                    $window.dispatchEvent(new Event("resize"));
                }, 100);
            }
        };
    }
})();

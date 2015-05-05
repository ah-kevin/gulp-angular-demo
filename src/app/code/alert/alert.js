/**
 * Created by Lennon on 15/5/5.
 */
angular.module("gulpAngularDemo.code").controller("TestAlertCtrl", ["$scope", "AlertService", function ($scope, AlertService) {
  $scope.myAlert = function () {
    AlertService.alert({
      title: "测试",
      content: "你好，我是警告"
    })
      .then(function () {
        alert("你刚才点了确定");
      });
  };

  $scope.myConfirm = function () {
    AlertService.confirm({
      title: "测试",
      content: "你好，确定吗？"
    })
      .then(function () {
        alert("你刚才点了确定");
      }, function () {
        alert("你刚才点了取消");
      });
  };
}]);

"use strict";

var app = angular.module("refactionjs", ["ngRoute"]);app.config(["$routeProvider", function (e) {
  e.when("/search", { templateUrl: "../views/search.html", controller: "searchController" }).when("/result/:gender/:minAge/:maxAge", { templateUrl: "../views/result.html", controller: "resultController" }).otherwise({ redirectTo: "/search" });
}]), app.factory("Config", [function () {
  return { base_url: "/endpoints/", endpoints: { search: "search" } };
}]), module.exports = [{ label: "Less than 18", value: { min: null, max: 18 } }, { label: "Between 19 - 25", value: { min: 19, max: 25 } }, { label: "Between 26 - 35", value: { min: 26, max: 35 } }, { label: "Between 36 - 49", value: { min: 36, max: 49 } }, { label: "More than 50", value: { min: 50, max: null } }, { label: "All", value: { min: 0, max: null } }], app.controller("resultController", ["$scope", "dataService", "$route", function (e, n, t) {
  var l = { gender: t.current.params.gender, minAge: t.current.params.minAge, maxAge: t.current.params.maxAge };n.getPeople(l).then(function (n) {
    e.data = n.data !== [] ? n.data : { resp: "No results." };
  });
}]);var genderOptions = require("./genderOptions");app.controller("searchController", ["$scope", "dataService", "$location", function (e, n, t) {
  function l() {
    e.step1 ? (e.step1 = !1, e.step2 = !0) : t.path("/result" + a());
  }function a() {
    return "/" + e.selectedGender + "/" + e.selectedAge.min + "/" + e.selectedAge.max;
  }e.genderOptions = genderOptions, e.ageOptions = [{ label: "Less than 18", value: { min: null, max: 18 } }, { label: "Between 19 - 25", value: { min: 19, max: 25 } }, { label: "Between 26 - 35", value: { min: 26, max: 35 } }, { label: "Between 36 - 49", value: { min: 36, max: 49 } }, { label: "More than 50", value: { min: 50, max: null } }, { label: "All", value: { min: 0, max: null } }], e.onSelectGender = function (n) {
    e.selectedGender = n.value, l();
  }, e.onSelectAgeRange = function (n) {
    e.selectedAge = n.value, l();
  };
}]), app.directive("listOptions", function () {
  return { replace: !0, restrict: "E", scope: { options: "=", onSelect: "=", title: "@" }, templateUrl: "directives/list-options/template.html", link: function link(e, n, t) {
      e.optionSelect = function (n) {
        e.optionSelected = n, e.onSelect(n);
      };
    } };
}), app.service("dataService", ["$q", "$http", "Config", function (e, n, t) {
  function l(l) {
    var a = e.defer(),
        r = "?gender=" + l.gender + "&minAge=" + l.minAge + "&maxAge=" + l.maxAge;return n.get(t.base_url + t.endpoints.search + r).then(function (e) {
      a.resolve(e);
    }).then(function () {
      a.reject("fail");
    }), a.promise;
  }return { getPeople: l };
}]), define("src/ui/application.js", function () {});
//# sourceMappingURL=application.es.js.map

app.service('dataService', ["$q", "$http", "Config", function ($q, $http, Config) {
    var service = {
      getPeople: getPeople,
    };
    return service;

    function getPeople(params){
      var def = $q.defer();
      var parameters = '?gender='+params.gender+'&minAge='+params.minAge+'&maxAge='+params.maxAge;
      
      $http.get(Config.base_url + Config.endpoints.search + parameters).then(function(data){
        def.resolve(data);
      })
      .then(function(){
        def.reject("fail");
      })
      return def.promise;
    }
  }]
);
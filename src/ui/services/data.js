app.service('dataService', ["$q", "$http", "Config", function ($q, $http, Config) {
    var service = {
      getMales: getMales,
      getFemales: getFemales,
      getEveryone: getEveryone,
      getOver30: getOver30,
      getUnder30: getUnder30
    };
    return service;

    function getMales(){
      var def = $q.defer();
      $http.get(Config.base_url + Config.endpoints.male).then(function(data){
        def.resolve(data);
      })
      .then(function(){
        def.reject("fail");
      })
      return def.promise;
    }
    function getFemales(id){
      console.log('adw')
    }
    function getEveryone(id){
      console.log('adw');
    }
    function getOver30(){
      console.log('aqweq');
    }  
    function getUnder30() {
      console.log('awdawdhbahuwd');
    }
  }]
);
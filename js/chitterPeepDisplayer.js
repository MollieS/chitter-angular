chitterChatter.controller('ChitterPeepController', ['$http','$scope', function($http, $scope) {

  var self = this;
  url ='/peeps'

    var req = {
         method: 'POST',
         url: url,
     headers: {
        'Content-Type': undefined
      },
    data: { message: "test" }
    }

    self.post = function() {
        //console.log(req);
        $http(req).
            success(function(result) {
                console.log(result);
            }).error(function(){
                //console.log('error');
                //console.log(req);
            });
    }

  self.get = function() {
      console.log("hello")
        $http.get(url).success(function(result) {
            console.log("Success", result);
           self.result = result;
        }).error(function() {
            console.log("error");
    });
    };
}]);

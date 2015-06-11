chitterChatter.controller('ChitterPeepController', ['$http','$scope', function($http, $scope) {
 
  var self = this;
  url ='http://localhost:3000/peeps'
    postUrl = 'http://localhost:3000/peeps/new'
    self.post = function() {
        console.log('posting!')
        $http.post(postUrl, {message: "this is a peep"}).
            success(function(result) {
                console.log('success!');
            }).error(function(){
                console.log('error');
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

function SubRedditService($http) {
  this.getData = function(name) {
    return $http.get(``)
  }
}
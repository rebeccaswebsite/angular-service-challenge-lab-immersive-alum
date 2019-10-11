function DomainService($http) {
  this.getPosts = function(domainName) {
    return $http.get()
  }
}
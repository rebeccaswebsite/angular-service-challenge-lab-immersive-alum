function DomainService($http) {
  this.getPosts = function(domainName) {
    return $http.get(`http://localhost:8080/rest/domain/${domainName}`);
  };
}

angular
  .module('app')
  .service('DomainService', DomainService);
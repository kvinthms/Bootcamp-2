angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.filter = document.getElementById('searchBar');
    $scope.query = '';
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
        "code": $scope.newListing.code,
        "name": $scope.newListing.name,
        "coordinates": {
          "latitude": $scope.newListing.latitude,
          "longitude": $scope.newListing.longitude
        },
        "address": $scope.newListing.address
      });
    };
    $scope.deleteListing = function(item) {
      var index = $scope.listings.indexOf(item);
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(item) {
      var index = $scope.listings.indexOf(item);
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
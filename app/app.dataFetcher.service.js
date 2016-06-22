module.exports = function($http) {
   return {
        getPackageByHumanId: function(humanId) {
             return $http.get('https://api.citypantry.com/packages/' + humanId)
                       .then(function(result) {
                            return result.data;
                        });
        }
   }
};
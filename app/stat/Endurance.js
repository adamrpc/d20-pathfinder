'use strict';

angular.module('d20-pathfinder' ).factory('StatEndurance', function( AbstractStat ) {
  var endurance = new AbstractStat( 'end' );
  endurance.min = 0;
  endurance.name = 'Endurance';
  return endurance;
});

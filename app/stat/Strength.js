'use strict';

angular.module('d20-pathfinder' ).factory('StatStrength', function( AbstractStat ) {
  var strength = new AbstractStat( 'str' );
  strength.min = 0;
  strength.name = 'Strength';
  return strength;
});

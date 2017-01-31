'use strict';

angular.module('d20-pathfinder' ).factory('StatCharisma', function( AbstractStat ) {
  var charisma = new AbstractStat( 'cha' );
  charisma.min = 0;
  charisma.name = 'Charisma';
  return charisma;
});

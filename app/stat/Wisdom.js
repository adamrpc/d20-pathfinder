'use strict';

angular.module('d20-pathfinder' ).factory('StatWisdom', function( AbstractStat ) {
  var wisdom = new AbstractStat( 'wis' );
  wisdom.min = 0;
  wisdom.name = 'Wisdom';
  return wisdom;
});

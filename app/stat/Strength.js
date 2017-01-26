'use strict';

angular.module('d20-pathfinder' ).run(function( AbstractStat ) {
  var strength = new AbstractStat( 'str' );
  strength.min = 0;
  strength.name = 'Strength';
});

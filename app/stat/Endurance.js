'use strict';

angular.module('d20-pathfinder' ).run(function( AbstractStat ) {
  var endurance = new AbstractStat( 'end' );
  endurance.min = 0;
  endurance.name = 'Endurance';
});

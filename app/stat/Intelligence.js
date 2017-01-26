'use strict';

angular.module('d20-pathfinder' ).run(function( AbstractStat ) {
  var intelligence = new AbstractStat( 'int' );
  intelligence.min = 0;
  intelligence.name = 'Intelligence';
});

'use strict';

angular.module('d20-pathfinder' ).run(function( AbstractStat ) {
  var wisdom = new AbstractStat( 'wis' );
  wisdom.min = 0;
  wisdom.name = 'Wisdom';
});

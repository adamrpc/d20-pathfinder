'use strict';

angular.module('d20-pathfinder' ).run(function( AbstractStat ) {
  var dexterity = new AbstractStat( 'dex' );
  dexterity.min = 0;
  dexterity.name = 'Dexterity';
});

'use strict';

angular.module('d20-pathfinder' ).factory('StatDexterity', function( AbstractStat ) {
  var dexterity = new AbstractStat( 'dex' );
  dexterity.min = 0;
  dexterity.name = 'Dexterity';
  return dexterity;
});

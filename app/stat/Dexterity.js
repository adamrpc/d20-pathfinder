'use strict';

angular.module('d20-pathfinder' ).factory('StatDexterity', function( AbstractStat ) {
  var dexterity = new AbstractStat( 'dex' );
  dexterity.min = 0;
  dexterity.name = 'Dexterity (Dex)';
  dexterity.description = 'Dexterity measures agility, reflexes, and balance. A creature with a Dexterity score of 0 is incapable of moving and is effectively immobile (but not unconscious).';
  return dexterity;
});

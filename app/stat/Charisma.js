'use strict';

angular.module('d20-pathfinder' ).factory('StatCharisma', function( AbstractStat ) {
  var charisma = new AbstractStat( 'cha' );
  charisma.min = 0;
  charisma.name = 'Charisma (Cha)';
  charisma.description = 'Charisma measures personality, personal magnetism, ability to lead, and appearance. A creature with a Charisma score of 0 is not able to exert himself in any way and is unconscious.';
  return charisma;
});

'use strict';

angular.module('d20-pathfinder' ).factory('StatStrength', function( AbstractStat ) {
  var strength = new AbstractStat( 'str' );
  strength.min = 0;
  strength.name = 'Strength (Str)';
  strength.description = 'Strength measures muscle and physical power. Strength also sets the maximum amount of weight your character can carry. A creature with a Strength score of 0 is too weak to move in any way and is unconscious.';
  return strength;
});

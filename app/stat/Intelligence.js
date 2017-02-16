'use strict';

angular.module('d20-pathfinder' ).factory('StatIntelligence', function( AbstractStat ) {
  var intelligence = new AbstractStat( 'int' );
  intelligence.min = 0;
  intelligence.name = 'Intelligence (Int)';
  intelligence.description = 'Intelligence determines how well a creature learns and reasons. This ability affects spellcasting ability in many ways. Creatures of animal-level instinct have Intelligence scores of 1 or 2. Any creature capable of understanding speech has a score of at least 3. A creature with an Intelligence score of 0 is comatose.';
  return intelligence;
});

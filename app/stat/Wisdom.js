'use strict';

angular.module('d20-pathfinder' ).factory('StatWisdom', function( AbstractStat ) {
  var wisdom = new AbstractStat( 'wis' );
  wisdom.min = 0;
  wisdom.name = 'Wisdom (Wis)';
  wisdom.description = 'Wisdom describes willpower, common sense, awareness, and intuition. A creature with a Wisdom score of 0 is incapable of rational thought and is unconscious.';
  return wisdom;
});

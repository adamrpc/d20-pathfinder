'use strict';

angular.module('d20-pathfinder' ).factory('FeatSlowAndSteady', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'slow_and_steady' );
  feat.name = 'Slow and steady';
  feat.description = 'Reduce base speed, but the speed is never modified by armor or encumbrance.';
  feat.hidden = true;
  feat.conditions = [];
  feat.bonuses = ['-base_speed-1', '!-inventory_speed', '!-armor_speed'];
  return feat;
});

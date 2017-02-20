'use strict';

angular.module('d20-pathfinder' ).factory('FeatGreed', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'greed' );
  feat.name = 'Greed';
  feat.description = 'Receive a bonus to determine the price of nonmagical goods that contain precious metals or gemstones.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+appraise[metal]+2', '+appraise[gem]+2'];
  return feat;
});

'use strict';

angular.module('d20-pathfinder' ).factory('FeatDefensiveTraining', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'defensive_training' );
  feat.name = 'Defensive training';
  feat.description = 'Gains AC bonus against creature of # subtype.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['AC[dodge(#)]+4'];
  return feat;
});

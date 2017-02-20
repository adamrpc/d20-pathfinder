'use strict';

angular.module('d20-pathfinder' ).factory('FeatKeenSenses', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'keen_senses' );
  feat.name = 'Keen senses';
  feat.description = 'Receive perception bonus.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+perception+2'];
  return feat;
});

'use strict';

angular.module('d20-pathfinder' ).factory('FeatSureFooted', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'sure_footed' );
  feat.name = 'Sure footed';
  feat.description = 'Receive a bonus on acrobatics and climbing.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+acrobatics+2', '+climbing+2'];
  return feat;
});

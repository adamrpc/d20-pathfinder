'use strict';

angular.module('d20-pathfinder' ).factory('FeatFearless', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'fearless' );
  feat.name = 'Fearless';
  feat.description = 'Receive a racial bonus against fear';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+save[fear]+2'];
  return feat;
});

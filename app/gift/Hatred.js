'use strict';

angular.module('d20-pathfinder' ).factory('FeatHatred', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'hatred' );
  feat.name = 'Hatred';
  feat.description = 'Stronger against against # due to special training against these hated foes.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+atk_target[#]+1'];
  return feat;
});

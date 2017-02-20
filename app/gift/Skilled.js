'use strict';

angular.module('d20-pathfinder' ).factory('FeatSkilled', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'skilled' );
  feat.name = 'Skilled';
  feat.description = 'The creature gains an additional skill rank at 1st level and one additional rank whenever it gains a level.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+skill_point+1'];
  return feat;
});

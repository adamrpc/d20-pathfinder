'use strict';

angular.module('d20-pathfinder' ).factory('FeatSkillFocus', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'skill_focus' );
  feat.name = 'Skill focus';
  feat.description = 'The creature is particularly adept at #.';
  feat.conditions = [];
  feat.hidden = false;
  feat.bonuses = ['skill(#).lvl<10|+#+3', 'skill(#).lvl>=10|+#+6'];
  return feat;
});

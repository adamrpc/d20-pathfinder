'use strict';

angular.module('d20-pathfinder' ).factory( 'SkillAC', function( AbstractSkill ) {
  var skill = new AbstractSkill( 'AC' );
  skill.hidden = true;
  skill.stat = 'dex';
  skill.base = 10;
  skill.variants = {
    touch: ['armor', 'shield', 'natural'],
    flat_footed: ['dodge', 'stat']
  };
  return skill;
});

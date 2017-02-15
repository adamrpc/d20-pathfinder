'use strict';

angular.module('d20-pathfinder' ).factory('GiftCompetent', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'competent' );
  gift.name = 'Competent';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+skill_point+1'];
  return gift;
});

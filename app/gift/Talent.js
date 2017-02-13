'use strict';

angular.module('d20-pathfinder' ).factory('GiftTalent', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'talent' );
  gift.name = 'Talent';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = false;
  gift.bonuses = ['skill(#).lvl<10|#+3', 'skill(#).lvl>=10|#+6'];
  return gift;
});

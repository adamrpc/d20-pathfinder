'use strict';

angular.module('d20-pathfinder' ).factory('GiftKnowledge', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'knowledge' );
  gift.name = 'Knowledge';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['perception[#]+2', 'auto-perception[#]+3'];
  return gift;
});

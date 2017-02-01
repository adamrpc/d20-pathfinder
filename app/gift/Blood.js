'use strict';

angular.module('d20-pathfinder' ).factory('GiftBlood', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'blood' );
  gift.name = 'Blood';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['race[#]+1'];
  return gift;
});

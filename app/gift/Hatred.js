'use strict';

angular.module('d20-pathfinder' ).factory('GiftHatred', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'hatred' );
  gift.name = 'Hatred';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+atk_target[#]+1'];
  return gift;
});

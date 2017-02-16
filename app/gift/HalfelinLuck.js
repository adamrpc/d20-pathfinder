'use strict';

angular.module('d20-pathfinder' ).factory('GiftHalfelinLuck', function( AbstractGift ) {
  var gift = new AbstractGift( 'halfelin_luck' );
  gift.name = 'Halfelin luck';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+save+1'];
  return gift;
});

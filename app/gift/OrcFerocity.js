'use strict';

angular.module('d20-pathfinder' ).factory('GiftOrcFerocity', function( AbstractGift ) {
  var gift = new AbstractGift( 'orc_ferocity' );
  gift.name = 'Orc ferocity';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['limit(1j)|ferocity'];
  return gift;
});

'use strict';

angular.module('d20-pathfinder' ).factory('GiftElficMagics', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'elfic_magics' );
  gift.name = 'Elfic magics';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+NLS+2', '+magicArt[properties]+2'];
  return gift;
});

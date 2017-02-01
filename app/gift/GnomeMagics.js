'use strict';

angular.module('d20-pathfinder' ).factory('GiftGnomeMagics', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'gnome_magics' );
  gift.name = 'Gnome magics';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+DD[illusion]+1'];
  return gift;
});

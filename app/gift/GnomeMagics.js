'use strict';

angular.module('d20-pathfinder' ).factory('GiftGnomeMagics', function( AbstractGift ) {
  var gift = new AbstractGift( 'gnome_magics' );
  gift.name = 'Gnome magics';
  gift.description = 'Increase the difficulty to escape illusion spells that the creature casts.';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+DC[illusion]+1'];
  return gift;
});

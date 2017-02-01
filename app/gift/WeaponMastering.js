'use strict';

angular.module('d20-pathfinder' ).factory('GiftWeaponMastering', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'weapon_mastering' );
  gift.name = 'Weapon mastering';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = false;
  gift.bonuses = ['!-atk_weapon[#]-4'];
  return gift;
});

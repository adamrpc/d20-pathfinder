'use strict';

angular.module('d20-pathfinder' ).factory('GiftSize', function( Engine, AbstractGift ) {
  var SIZES = ['I', 'Min', 'TP', 'P', 'M', 'G', 'TG', 'Gig', 'C'];
  var GiftSize = angular.copy(AbstractGift);
  angular.extend(GiftSize.prototype, AbstractGift.prototype);
  GiftSize.prototype.bonus = function(type, creature) {
    var index = _.indexOf(SIZES, Engine.getUniqueLiteralValue('gift', creature, 'size'));
    if(index < 0) {
      return 0;
    }
    if(type === 'CA') {
      return Math.pow(2, Math.abs(index - 4)) * ((index - 4 > 0)?-1:1);
    }
    if(type === 'BMO' || type === 'DMD') {
      return Math.pow(2, Math.abs(index - 4)) * ((index - 4 > 0)?1:-1);
    }
    if(type === 'stealth') {
      return -(index - 4) * 4;
    }
  };
  var gift = new GiftSize( 'size' );
  gift.name = 'Size';
  gift.description = '';
  gift.conditions = ['gift(size!)'];
  gift.bonuses = ['+CA', '+BMO', '+DMD', '+stealth'];
  return gift;
});

'use strict';

angular.module('d20-pathfinder' ).factory('GiftDefensiveTraining', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'defensive_training' );
  gift.name = 'Defensive training';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+CA[#]+4'];
  return gift;
});

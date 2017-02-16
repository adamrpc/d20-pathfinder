'use strict';

angular.module('d20-pathfinder' ).factory('GiftDefensiveTraining', function( AbstractGift ) {
  var gift = new AbstractGift( 'defensive_training' );
  gift.name = 'Defensive training';
  gift.description = 'Gains AC bonus against creature of # subtype.';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+CA[#]+4'];
  return gift;
});

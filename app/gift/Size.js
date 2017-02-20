'use strict';

angular.module('d20-pathfinder' ).factory('FeatSize', function( Engine, AbstractFeat ) {
  var SIZES = ['I', 'Min', 'TP', 'P', 'M', 'G', 'TG', 'Gig', 'C'];
  var GiftSize = angular.copy(AbstractFeat);
  angular.extend(GiftSize.prototype, AbstractFeat.prototype);
  GiftSize.prototype.bonus = function(type, creature) {
    var index = _.indexOf(SIZES, Engine.getUniqueLiteralValue('feat', creature, 'size'));
    if(index < 0) {
      return 0;
    }
    if(type === 'AC_base') {
      return Math.pow(2, Math.abs(index - 4)) * ((index - 4 > 0)?-1:1);
    }
    if(type === 'CMB' || type === 'CMD') {
      return Math.pow(2, Math.abs(index - 4)) * ((index - 4 > 0)?1:-1);
    }
    if(type === 'stealth') {
      return -(index - 4) * 4;
    }
    if(type === 'base_speed') {
      return index;
    }
  };
  var feat = new GiftSize( 'size' );
  feat.name = 'Size';
  feat.description = '';
  feat.conditions = ['feat(size!)'];
  feat.hidden = true;
  feat.bonuses = ['AC_base', '+CMB', '+CMD', '+stealth', '+base_speed'];
  return feat;
});

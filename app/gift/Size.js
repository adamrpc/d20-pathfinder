'use strict';

angular.module('d20-pathfinder' ).factory('FeatSize', function( $log, AbstractFeat ) {
  var SIZES = ['I', 'Min', 'TP', 'P', 'M', 'G', 'TG', 'Gig', 'C'];
  var FeatSize = angular.copy(AbstractFeat);
  angular.extend(FeatSize.prototype, AbstractFeat.prototype);
  FeatSize.prototype.bonus = function(creature, skill) {
    var matches = skill.match(/^([a-zA-Z_]+?|#)(\[((#|[a-zA-Z_]+?)|([a-zA-Z_]+)\((#|[a-zA-Z_]+?)\))])?$/);
    var result = {
      baseBonus: 0,
      bonus: 0,
      malus: 0,
      malusLimit: 0,
      bonusLimit: 0
    };
    if(!matches) {
      $log.warn('Bad skill formatting (' + skill +') while computing bonus (' + this.id + '), returning 0.');
      return result;
    }
    var skill1 = matches[1];
    var skill2 = matches[4] ? matches[4] : matches[5];
    var skill3 = matches[6];
    var applyBonus = skill2 === 'racial' || skill2 === 'any' || !skill2;
    var multipleBonuses = skill1 === 'any' || skill2 === 'any' || skill3 === 'any';
    var bonus = 0;
    var index = _.indexOf(SIZES, _.has(creature, 'feat') && _.has(creature.feat, this.id) ? creature.feat[this.id] : null);
    if(index >= 0) {
      if( skill1 === 'AC' && applyBonus ) {
        bonus = Math.pow( 2, Math.abs( index - 4 ) ) * ((index - 4 > 0) ? -1 : 1);
      } else if( (skill1 === 'CMB' || skill1 === 'CMD') && applyBonus ) {
        bonus = Math.pow( 2, Math.abs( index - 4 ) ) * ((index - 4 > 0) ? 1 : -1);
      } else if( skill1 === 'stealth' && applyBonus ) {
        bonus = -(index - 4) * 4;
      } else if( skill1 === 'base_speed' && applyBonus ) {
        bonus = index;
      }
    }
    if(multipleBonuses) {
      return {
        any: {
          baseBonus: 0,
          bonus: 0,
          malus: 0,
          malusLimit: 0,
          bonusLimit: 0
        },
        racial: {
          baseBonus: bonus,
          bonus: 0,
          malus: 0,
          malusLimit: 0,
          bonusLimit: 0
        }
      };
    }
    result.baseBonus = bonus;
    return result;
  };
  var feat = new FeatSize( 'size' );
  feat.name = 'Size';
  feat.description = '';
  feat.conditions = ['feat(size!)'];
  feat.hidden = true;
  feat.bonuses = ['AC[size(any)]', '+CMB', '+CMD', '+stealth', '+base_speed'];
  return feat;
});

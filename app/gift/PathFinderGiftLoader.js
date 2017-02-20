'use strict';

angular.module('d20-pathfinder' ).run( function(
  FeatLib,
  FeatLoader,
  FeatSize,
  FeatSlowAndSteady,
  FeatLowLightVision,
  FeatDarkVision,
  FeatGreed,
  FeatBlood,
  FeatStonecunning,
  FeatDefensiveTraining,
  FeatHatred,
  FeatHardy,
  FeatStability,
  FeatWeaponProficiency,
  FeatElvenImmunities,
  FeatElvenMagics,
  FeatKeenSenses,
  FeatGnomeMagics,
  FeatFreeBardSpell,
  FeatResistance,
  FeatSkillFocus,
  FeatMultitalented,
  FeatIntimidating,
  FeatOrcFerocity,
  FeatFearless,
  FeatHalflingLuck,
  FeatSureFooted,
  FeatSkilled) {
  var ID = 'pathfinder';
  var PathFinderFeatLoader = function(){
    this.id = ID;
  };
  PathFinderFeatLoader.prototype.load = function() {
    var args = Array.from(arguments);
    var all = _.includes(args, FeatLoader.ALL) || _.includes(args, ID);
    _.forEach([
      FeatSize,
      FeatSlowAndSteady,
      FeatLowLightVision,
      FeatDarkVision,
      FeatGreed,
      FeatBlood,
      FeatStonecunning,
      FeatDefensiveTraining,
      FeatHatred,
      FeatHardy,
      FeatStability,
      FeatWeaponProficiency,
      FeatElvenImmunities,
      FeatElvenMagics,
      FeatKeenSenses,
      FeatGnomeMagics,
      FeatFreeBardSpell,
      FeatResistance,
      FeatSkillFocus,
      FeatMultitalented,
      FeatIntimidating,
      FeatOrcFerocity,
      FeatFearless,
      FeatHalflingLuck,
      FeatSureFooted,
      FeatSkilled
    ], function(obj) {
      if(all || _.includes(args, obj.id)) {
        FeatLib.register(obj.id, obj);
      }
    });
  };
  FeatLoader.register(ID, new PathFinderFeatLoader());
});

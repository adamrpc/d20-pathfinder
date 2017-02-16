'use strict';

angular.module('d20-pathfinder' ).run( function(
  GiftLib,
  GiftLoader,
  GiftSize,
  GiftSlowlyButSurely,
  GiftLowLightVision,
  GiftNightVision,
  GiftGreed,
  GiftBlood,
  GiftKnowledge,
  GiftDefensiveTraining,
  GiftHatred,
  GiftHardy,
  GiftSteady,
  GiftWeaponMastering,
  GiftElvenImmunities,
  GiftElficMagics,
  GiftSharpenedSens,
  GiftGnomeMagics,
  GiftFreeBardSpell,
  GiftResistance,
  GiftTalent,
  GiftMultipleTalents,
  GiftIntimidating,
  GiftOrcFerocity,
  GiftFearless,
  GiftHalfelinLuck,
  GiftGoodBalance,
  GiftSkilled) {
  var ID = 'pathfinder';
  var PathFinderGiftLoader = function(){
    this.id = ID;
  };
  PathFinderGiftLoader.prototype.load = function() {
    var args = Array.from(arguments);
    var all = _.includes(args, GiftLoader.ALL) || _.includes(args, ID);
    _.forEach([
      GiftSize,
      GiftSlowlyButSurely,
      GiftLowLightVision,
      GiftNightVision,
      GiftGreed,
      GiftBlood,
      GiftKnowledge,
      GiftDefensiveTraining,
      GiftHatred,
      GiftHardy,
      GiftSteady,
      GiftWeaponMastering,
      GiftElvenImmunities,
      GiftElficMagics,
      GiftSharpenedSens,
      GiftGnomeMagics,
      GiftFreeBardSpell,
      GiftResistance,
      GiftTalent,
      GiftMultipleTalents,
      GiftIntimidating,
      GiftOrcFerocity,
      GiftFearless,
      GiftHalfelinLuck,
      GiftGoodBalance,
      GiftSkilled
    ], function(obj) {
      if(all || _.includes(args, obj.id)) {
        GiftLib.register(obj.id, obj);
      }
    });
  };
  GiftLoader.register(ID, new PathFinderGiftLoader());
});

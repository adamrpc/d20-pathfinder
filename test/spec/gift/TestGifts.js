'use strict';

describe('Factory: Gifts', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var giftLib;
  var loader;
  var log;
  var objs = [];
  beforeEach( inject( function(
    $log,
    GiftLib,
    GiftLoader,
    GiftSize,
    GiftSlowlyButSurely,
    GiftDarkVision,
    GiftNightVision,
    GiftGreed,
    GiftBlood,
    GiftKnowledge,
    GiftDefensiveTraining,
    GiftHatred,
    GiftHardy,
    GiftSteady,
    GiftWeaponMastering,
    GiftElficImmunity,
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
    GiftCompetent) {
    log = $log;
    giftLib = GiftLib;
    loader = GiftLoader;
    objs.push(GiftSize);
    objs.push(GiftSlowlyButSurely);
    objs.push(GiftDarkVision);
    objs.push(GiftNightVision);
    objs.push(GiftGreed);
    objs.push(GiftBlood);
    objs.push(GiftKnowledge);
    objs.push(GiftDefensiveTraining);
    objs.push(GiftHatred);
    objs.push(GiftHardy);
    objs.push(GiftSteady);
    objs.push(GiftWeaponMastering);
    objs.push(GiftElficImmunity);
    objs.push(GiftElficMagics);
    objs.push(GiftSharpenedSens);
    objs.push(GiftGnomeMagics);
    objs.push(GiftFreeBardSpell);
    objs.push(GiftResistance);
    objs.push(GiftTalent);
    objs.push(GiftMultipleTalents);
    objs.push(GiftIntimidating);
    objs.push(GiftOrcFerocity);
    objs.push(GiftFearless);
    objs.push(GiftHalfelinLuck);
    objs.push(GiftGoodBalance);
    objs.push(GiftCompetent);
  } ) );
  it('Should load all gifts without warning', function() {
    spyOn(log, 'warn').and.callFake( console.log );
    loader.load('all');
    expect(log.warn.calls.count()).toBe(0);
    expect(_.keys(giftLib.registered).length).toBe(objs.length);
    _.forEach(objs, function(obj) {
      expect(_.has(giftLib.registered, obj.id)).toBe(true);
      expect(giftLib.registered[obj.id]).toBe(obj);
    });
  });
});

'use strict';

describe('Factory: Feats', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var featLib;
  var loader;
  var log;
  var objs = [];
  beforeEach( inject( function(
    $log,
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
    log = $log;
    featLib = FeatLib;
    loader = FeatLoader;
    objs.push(FeatSize);
    objs.push(FeatSlowAndSteady);
    objs.push(FeatLowLightVision);
    objs.push(FeatDarkVision);
    objs.push(FeatGreed);
    objs.push(FeatBlood);
    objs.push(FeatStonecunning);
    objs.push(FeatDefensiveTraining);
    objs.push(FeatHatred);
    objs.push(FeatHardy);
    objs.push(FeatStability);
    objs.push(FeatWeaponProficiency);
    objs.push(FeatElvenImmunities);
    objs.push(FeatElvenMagics);
    objs.push(FeatKeenSenses);
    objs.push(FeatGnomeMagics);
    objs.push(FeatFreeBardSpell);
    objs.push(FeatResistance);
    objs.push(FeatSkillFocus);
    objs.push(FeatMultitalented);
    objs.push(FeatIntimidating);
    objs.push(FeatOrcFerocity);
    objs.push(FeatFearless);
    objs.push(FeatHalflingLuck);
    objs.push(FeatSureFooted);
    objs.push(FeatSkilled);
  } ) );
  it('Should load all feats without warning', function() {
    spyOn(log, 'warn').and.callFake( console.log );
    loader.load('all');
    expect(log.warn.calls.count()).toBe(0);
    expect(_.keys(featLib.registered).length).toBe(objs.length);
    _.forEach(objs, function(obj) {
      expect(_.has(featLib.registered, obj.id)).toBe(true);
      expect(featLib.registered[obj.id]).toBe(obj);
    });
  });
});

'use strict';

describe('Factory: Gifts', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var giftLib = {
    register: function(){}
  };
  var log;
  var loader;
  var objs = [];
  beforeEach(module(function ($provide) {
    $provide.value('GiftLib', giftLib);
  }));
  beforeEach( inject( function(
    GiftLoader,
    $log,
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
    GiftFreeBardSpell) {
    loader = GiftLoader;
    log = $log;
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
  } ) );
  it('Should load all races without warning', function() {
    spyOn(log, 'warn' ).and.callFake(console.log);
    spyOn(giftLib, 'register' );
    loader.load('all');
    expect(log.warn.calls.count() ).toBe(0);
    expect(giftLib.register.calls.count() ).toBe(objs.length);
    _.forEach(objs, function(obj) {
      expect(giftLib.register).toHaveBeenCalledWith( obj.id, obj );
    });
  });
});

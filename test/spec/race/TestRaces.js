'use strict';

describe('Factory: Races', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var raceLib = {
    register: function(){}
  };
  var log;
  var giftLoader;
  var statLoader;
  var raceLoader;
  var races = [];
  beforeEach(module(function ($provide) {
    $provide.value('RaceLib', raceLib);
  }));
  beforeEach( inject( function( GiftLoader, StatLoader, RaceLoader, $log, RaceDwarf, RaceElf, RaceGnome, RaceHalfElf, RaceHalfOrc, RaceHalfelin, RaceHuman ) {
    giftLoader = GiftLoader;
    statLoader = StatLoader;
    raceLoader = RaceLoader;
    log = $log;
    races.push(RaceDwarf);
    races.push(RaceElf);
    races.push(RaceGnome);
    races.push(RaceHalfElf);
    races.push(RaceHalfOrc);
    races.push(RaceHalfelin);
    races.push(RaceHuman);
  } ) );
  it('Should load all races without warning', function() {
    statLoader.load('all');
    giftLoader.load('all');
    spyOn(log, 'warn' ).and.callFake(console.log);
    spyOn(raceLib, 'register' );
    raceLoader.load('all');
    expect(log.warn.calls.count() ).toBe(0);
    expect(raceLib.register.calls.count() ).toBe(races.length);
    _.forEach(races, function(race) {
      expect(raceLib.register).toHaveBeenCalledWith( race.id, race );
    });
  });
});

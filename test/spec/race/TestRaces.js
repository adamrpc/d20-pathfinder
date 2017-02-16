'use strict';

describe('Factory: Races', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var raceLib;
  var giftLoader;
  var statLoader;
  var raceLoader;
  var log;
  var races = [];
  beforeEach( inject( function( $log, RaceLib, GiftLoader, StatLoader, RaceLoader, RaceDwarf, RaceElf, RaceGnome, RaceHalfElf, RaceHalfOrc, RaceHalfelin, RaceHuman ) {
    log = $log;
    raceLib = RaceLib;
    giftLoader = GiftLoader;
    statLoader = StatLoader;
    raceLoader = RaceLoader;
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
    spyOn(log, 'warn').and.callFake( console.log );
    raceLoader.load('all');
    expect(log.warn.calls.count()).toBe(0);
    expect(_.keys(raceLib.registered).length).toBe(races.length);
    _.forEach(races, function(race) {
      expect(_.has(raceLib.registered, race.id)).toBe(true);
      expect(raceLib.registered[race.id]).toBe(race);
    });
  });
});

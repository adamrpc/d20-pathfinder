'use strict';

describe('Factory: Races', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var raceLib;
  var featLoader;
  var statLoader;
  var raceLoader;
  var log;
  var races = [];
  beforeEach( inject( function( $log, RaceLib, FeatLoader, StatLoader, RaceLoader, RaceDwarf, RaceElf, RaceGnome, RaceHalfElf, RaceHalfOrc, RaceHalfling, RaceHuman ) {
    log = $log;
    raceLib = RaceLib;
    featLoader = FeatLoader;
    statLoader = StatLoader;
    raceLoader = RaceLoader;
    races.push(RaceDwarf);
    races.push(RaceElf);
    races.push(RaceGnome);
    races.push(RaceHalfElf);
    races.push(RaceHalfOrc);
    races.push(RaceHalfling);
    races.push(RaceHuman);
  } ) );
  it('Should load all races without warning', function() {
    statLoader.load('all');
    featLoader.load('all');
    spyOn(log, 'warn').and.callFake( console.debug );
    raceLoader.load('all');
    expect(log.warn.calls.count()).toBe(0);
    expect(_.keys(raceLib.registered).length).toBe(races.length);
    _.forEach(races, function(race) {
      expect(_.has(raceLib.registered, race.id)).toBe(true);
      expect(raceLib.registered[race.id]).toBe(race);
    });
  });
});

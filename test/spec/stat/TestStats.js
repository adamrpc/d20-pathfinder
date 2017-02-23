'use strict';

describe('Factory: Stats', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var statLib;
  var log;
  var statLoader;
  var stats = [];
  beforeEach( inject( function( StatLoader, $log, StatLib, StatCharisma, StatDexterity, StatConstitution, StatIntelligence, StatStrength, StatWisdom ) {
    statLoader = StatLoader;
    statLib = StatLib;
    log = $log;
    stats.push(StatCharisma);
    stats.push(StatDexterity);
    stats.push(StatConstitution);
    stats.push(StatIntelligence);
    stats.push(StatStrength);
    stats.push(StatWisdom);
  } ) );
  it('Should load all races without warning', function() {
    spyOn(log, 'warn' ).and.callFake(console.debug);
    spyOn(statLib, 'register' );
    statLoader.load('all');
    expect(log.warn.calls.count() ).toBe(0);
    expect(_.keys(statLib.registered).length).toBe(stats.length);
    _.forEach(stats, function(obj) {
      expect(_.has(statLib.registered, obj.id)).toBe(true);
      expect(statLib.registered[obj.id]).toBe(obj);
    });
  });
});

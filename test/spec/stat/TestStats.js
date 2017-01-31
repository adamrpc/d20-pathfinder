'use strict';

describe('Factory: Stats', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var statLib = {
    register: function(){}
  };
  var log;
  var statLoader;
  var stats = [];
  beforeEach(module(function ($provide) {
    $provide.value('StatLib', statLib);
  }));
  beforeEach( inject( function( StatLoader, $log, StatLib, StatCharisma, StatDexterity, StatEndurance, StatIntelligence, StatStrength, StatWisdom ) {
    statLoader = StatLoader;
    log = $log;
    stats.push(StatCharisma);
    stats.push(StatDexterity);
    stats.push(StatEndurance);
    stats.push(StatIntelligence);
    stats.push(StatStrength);
    stats.push(StatWisdom);
  } ) );
  it('Should load all races without warning', function() {
    spyOn(log, 'warn' ).and.callFake(console.log);
    spyOn(statLib, 'register' );
    statLoader.load('all');
    expect(log.warn.calls.count() ).toBe(0);
    expect(statLib.register.calls.count() ).toBe(stats.length);
    _.forEach(stats, function(stat) {
      expect(statLib.register).toHaveBeenCalledWith( stat.id, stat );
    });
  });
});

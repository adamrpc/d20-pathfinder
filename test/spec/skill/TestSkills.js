'use strict';

describe('Factory: Skills', function() {
  beforeEach( module( 'd20-pathfinder' ) );
  var skillLib;
  var loader;
  var log;
  var objs = [];
  beforeEach( inject( function(
    $log,
    SkillLib,
    SkillLoader,
    SkillAC) {
    log = $log;
    skillLib = SkillLib;
    loader = SkillLoader;
    objs.push(SkillAC);
  } ) );
  it('Should load all feats without warning', function() {
    spyOn(log, 'warn').and.callFake( console.log );
    loader.load('all');
    expect(log.warn.calls.count()).toBe(0);
    expect(_.keys(skillLib.registered).length).toBe(objs.length);
    _.forEach(objs, function(obj) {
      expect(_.has(skillLib.registered, obj.id)).toBe(true);
      expect(skillLib.registered[obj.id]).toBe(obj);
    });
  });
});

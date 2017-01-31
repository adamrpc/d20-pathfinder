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
  beforeEach( inject( function( GiftLoader, $log, GiftSize, SlowlyButSurely ) {
    loader = GiftLoader;
    log = $log;
    objs.push(GiftSize);
    objs.push(SlowlyButSurely);
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

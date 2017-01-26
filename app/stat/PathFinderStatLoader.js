'use strict';

angular.module('d20-pathfinder' ).run( function( StatLoader, StatLib, Charisma, Dexterity, Endurance, Intelligence, Strength, Wisdom ) {
  var ID = 'pathfinder';
  var PathFinderStatLoader = function(){
    this.id = ID;
  };
  PathFinderStatLoader.prototype.load = function() {
    var args = Array.from(arguments);
    var all = _.includes(args, StatLoader.ALL) || _.includes(args, ID);
    _.forEach([Charisma, Dexterity, Endurance, Intelligence, Strength, Wisdom], function(race) {
      if(all || _.includes(args, race.id)) {
        StatLib.register(race.id, race);
      }
    });
  };
  StatLoader.register(ID, new PathFinderStatLoader());
});

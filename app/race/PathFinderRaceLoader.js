'use strict';

angular.module('d20-pathfinder' ).run( function( RaceLoader, RaceLib, RaceDwarf, RaceElf, RaceGnome, RaceHalfElf, RaceHalfOrc, RaceHalfelin, RaceHuman ) {
  var ID = 'pathfinder';
  var PathFinderRaceLoader = function(){
    this.id = ID;
  };
  PathFinderRaceLoader.prototype.load = function() {
    var args = Array.from(arguments);
    var all = _.includes(args, RaceLoader.ALL) || _.includes(args, ID);
    _.forEach([RaceDwarf, RaceElf, RaceGnome, RaceHalfElf, RaceHalfOrc, RaceHalfelin, RaceHuman], function(race) {
      if(all || _.includes(args, race.id)) {
        RaceLib.register(race.id, race);
      }
    });
  };
  RaceLoader.register(ID, new PathFinderRaceLoader());
});

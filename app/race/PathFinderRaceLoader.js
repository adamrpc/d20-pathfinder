'use strict';

angular.module('d20-pathfinder' ).run( function( $log, GiftLib, StatLib, RaceLoader, RaceLib, RaceDwarf, RaceElf, RaceGnome, RaceHalfElf, RaceHalfOrc, RaceHalfelin, RaceHuman ) {
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
        _.forEach(race.gifts, function(gift) {
          var matches = gift.match(/^(.*?)(\[(.*)])?$/);
          if(!matches) {
            $log.warn('Bad gift formatting (' + gift +') while loading race (' + race.id + '), loading anyway.');
          }
          if(matches[1] !== 'any' && !GiftLib[matches[1]]) {
            $log.warn('Unkown gift (' + matches[1] + ') while loading race (' + race.id + '), loading anyway.');
          }
        });
        _.forEach(race.stats, function(stat) {
          var matches = stat.match(/^(.*)[+\-*/=][0-9]+$/);
          if(!matches) {
            $log.warn('Bad stat formatting (' + stat +') while loading race (' + race.id + '), loading anyway.');
          }
          if(matches[1] !== 'any' && matches[1] !== 'all' && !StatLib[matches[1]]) {
            $log.warn('Unkown stat (' + matches[1] + ') while loading race (' + race.id + '), loading anyway.');
          }
        });
      }
    });
  };
  RaceLoader.register(ID, new PathFinderRaceLoader());
});

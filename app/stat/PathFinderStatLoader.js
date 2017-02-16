'use strict';

angular.module('d20-pathfinder' ).run( function( StatLoader, StatLib, StatCharisma, StatDexterity, StatConstitution, StatIntelligence, StatStrength, StatWisdom ) {
  var ID = 'pathfinder';
  var PathFinderStatLoader = function(){
    this.id = ID;
  };
  PathFinderStatLoader.prototype.load = function() {
    var args = Array.from(arguments);
    var all = _.includes(args, StatLoader.ALL) || _.includes(args, ID);
    _.forEach([StatCharisma, StatDexterity, StatConstitution, StatIntelligence, StatStrength, StatWisdom], function(stat) {
      if(all || _.includes(args, stat.id)) {
        StatLib.register(stat.id, stat);
      }
    });
  };
  StatLoader.register(ID, new PathFinderStatLoader());
});

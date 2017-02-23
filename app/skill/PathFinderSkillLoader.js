'use strict';

angular.module('d20-pathfinder' ).run( function( SkillLoader, SkillLib, SkillAC ) {
  var ID = 'pathfinder';
  var PathFinderSkillLoader = function(){
    this.id = ID;
  };
  PathFinderSkillLoader.prototype.load = function() {
    var args = Array.from(arguments);
    var all = _.includes(args, SkillLoader.ALL) || _.includes(args, ID);
    _.forEach([SkillAC], function(skill) {
      if(all || _.includes(args, skill.id)) {
        SkillLib.register(skill.id, skill);
      }
    });
  };
  SkillLoader.register(ID, new PathFinderSkillLoader());
});

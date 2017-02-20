'use strict';

angular.module('d20-pathfinder' ).factory('FeatStonecunning', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'stonecunning' );
  feat.name = 'Stonecunning';
  feat.description = 'Notice unusual stonework, such as traps and hidden doors located in stone walls or floors.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['perception[stone]+2', 'auto_perception[stone]'];
  return feat;
});

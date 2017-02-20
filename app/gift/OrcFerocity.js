'use strict';

angular.module('d20-pathfinder' ).factory('FeatOrcFerocity', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'orc_ferocity' );
  feat.name = 'Orc ferocity';
  feat.description = 'Once per day, when the creature is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['limit(1j)|ferocity'];
  return feat;
});

'use strict';

angular.module('d20-pathfinder' ).factory('FeatElvenMagics', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'elven_magics' );
  feat.name = 'Elven magics';
  feat.description = 'Resistant to spells and able to identify the properties of magic items.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+CL+2', '+spellCraft[properties]+2'];
  return feat;
});

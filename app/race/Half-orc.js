'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceHalfOrc', function( AbstractRace ) {
  var race = new AbstractRace( 'half_orc' );
  race.name = 'Half-orc';
  race.description = '';
  race.stats = [ 'any+2' ];
  race.gifts = [
    'size[M]',
    'night_vision',
    'intimidating',
    'blood[half_orc]',
    'blood[orc]',
    'blood[human]',
    'orc_ferocity',
    'weapon_mastering[great_axe]',
    'weapon_mastering[2_handed_cimetery]'
  ];
  race.languages = [ 'common', 'orc' ];
  race.availableLanguages = [ 'abyssal', 'draconic', 'giant', 'gnoll', 'goblin' ];
  return race;
});

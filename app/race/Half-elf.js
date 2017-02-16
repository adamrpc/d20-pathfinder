'use strict';

angular.module('d20-pathfinder' ).factory('RaceHalfElf', function( AbstractRace ) {
  var race = new AbstractRace( 'half_elf' );
  race.name = 'Half-elf';
  race.description = '';
  race.stats = [ 'any+2' ];
  race.gifts = [
    'size[M]',
    'low_light_vision',
    'talent[any]',
    'elven_immunities',
    'blood[elf]',
    'blood[human]',
    'blood[half_elf]',
    'sharpened_sens',
    'multiple_talents'
  ];
  race.languages = [ 'common', 'elf' ];
  race.availableLanguages = [
    'abyssal',
    'aklo',
    'aquatic',
    'aerial',
    'celestial',
    'common-depths',
    'draconic',
    'giant',
    'gnoll',
    'gnome',
    'goblin',
    'halfelin',
    'igneous',
    'infernal',
    'dwarf',
    'orc',
    'sylvan',
    'earthy'
  ];
  return race;
});

'use strict';

angular.module('d20-pathfinder' ).factory('RaceHalfElf', function( AbstractRace ) {
  var race = new AbstractRace( 'half_elf' );
  race.name = 'Half-elf';
  race.description = '';
  race.stats = [ 'any+2' ];
  race.feats = [
    'size[M]',
    'low_light_vision',
    'skill_focus[any]',
    'elven_immunities',
    'blood[elf]',
    'blood[human]',
    'blood[half_elf]',
    'keen_senses',
    'multitalented'
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

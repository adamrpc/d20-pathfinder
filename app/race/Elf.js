'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceElf', function( AbstractRace ) {
  var race = new AbstractRace( 'elf' );
  race.name = 'Elf';
  race.description = '';
  race.stats = [ 'dex+2', 'int+2', 'con-2' ];
  race.feats = [
    'size[M]',
    'low_light_vision',
    'elven_immunities',
    'elven_magics',
    'keen_senses',
    'blood[elf]',
    'weapon_proficiency[long_bow]',
    'weapon_proficiency[composite_long_bow]',
    'weapon_proficiency[bow]',
    'weapon_proficiency[composite_bow]',
    'weapon_proficiency[sword]',
    'weapon_proficiency[rapier]'
  ];
  race.languages = [ 'common', 'elf' ];
  race.availableLanguages = [ 'celestial', 'draconic', 'gnoll', 'gnome', 'goblin', 'orc', 'sylvan' ];
  return race;
});

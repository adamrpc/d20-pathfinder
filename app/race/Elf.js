'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceElf', function( AbstractRace ) {
  var race = new AbstractRace( 'elf' );
  race.name = 'Elf';
  race.description = '';
  race.stats = [ 'dex+2', 'int+2', 'end-2' ];
  race.gifts = [
    'size[M]',
    'dark_vision',
    'elfic_immunity',
    'elfic_magics',
    'sharpened_sens',
    'blood[elf]',
    'weapon_mastering[long_bow]',
    'weapon_mastering[composite_long_bow]',
    'weapon_mastering[bow]',
    'weapon_mastering[composite_bow]',
    'weapon_mastering[sword]',
    'weapon_mastering[rapier]'
  ];
  race.languages = [ 'common', 'elf' ];
  race.availableLanguages = [ 'celestial', 'draconic', 'gnoll', 'gnome', 'goblin', 'orc', 'sylvan' ];
  return race;
});

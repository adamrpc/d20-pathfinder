'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceHalfling', function( AbstractRace ) {
  var race = new AbstractRace( 'halfling' );
  race.name = 'Halfling';
  race.description = '';
  race.stats = [ 'dex+2', 'cha+2', 'str-2' ];
  race.feats = [
    'size[P]',
    'blood[halfelin]',
    'fearless',
    'halfling_luck',
    'keen_senses',
    'sure_footed',
    'weapon_proficiency[sling]'
  ];
  race.languages = [ 'common', 'halfelin' ];
  race.availableLanguages = [ 'abyssal', 'elf',  'gnome', 'goblin', 'dwarf' ];
  return race;
});

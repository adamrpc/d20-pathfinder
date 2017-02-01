'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceHalfelin', function( AbstractRace ) {
  var race = new AbstractRace( 'halfelin' );
  race.name = 'Halfelin';
  race.description = '';
  race.stats = [ 'dex+2', 'cha+2', 'str-2' ];
  race.gifts = [
    'size[P]',
    'blood[halfelin]',
    'fearless',
    'halfelin_luck',
    'sharpened_sens',
    'good_balance',
    'weapon_mastering[sling]'
  ];
  race.languages = [ 'common', 'halfelin' ];
  race.availableLanguages = [ 'abyssal', 'elf',  'gnome', 'goblin', 'dwarf' ];
  return race;
});

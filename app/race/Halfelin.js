'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceHalfelin', function( AbstractRace ) {
  var race = new AbstractRace( 'halfelin' );
  race.name = 'Halfelin';
  race.description = '';
  race.stats = [ 'dex+2', 'cha+2', 'str-2' ];
  race.gifts = [
    'size-P',
    'speed-slow',
    'fearless',
    'halfelin-luck',
    'sharpened-sens',
    'good-balance',
    'mastering[sling]',
    'war-weapon[halfelin]'
  ];
  race.languages = [ 'common', 'halfelin' ];
  race.availableLanguages = [ 'abyssal', 'elf',  'gnome', 'goblin', 'dwarf' ];
  return race;
});

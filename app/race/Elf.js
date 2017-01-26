'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceElf', function( AbstractRace ) {
  var race = new AbstractRace( 'elf' );
  race.name = 'Elf';
  race.description = '';
  race.stats = [ 'dex+2', 'int+2', 'end-2' ];
  race.gifts = [
    'size-M',
    'speed-normal',
    'dark-vision',
    'elfic-immunity',
    'elfic-magics',
    'sharpened-sens',
    'mastering[long-bow]',
    'mastering[composite-long-bow]',
    'mastering[bow]',
    'mastering[composite-bow]',
    'mastering[sword]',
    'mastering[rapier]',
    'war-weapon[elf]',
    'war-weapon[elfic]'
  ];
  race.languages = [ 'common', 'elf' ];
  race.availableLanguages = [ 'celestial', 'draconic', 'gnoll', 'gnome', 'goblin', 'orc', 'sylvan' ];
  return race;
});

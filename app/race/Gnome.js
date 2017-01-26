'use strict';

angular.module('d20-pathfinder' ).factory('RaceGnome', function( AbstractRace ) {
  var race = new AbstractRace( 'gnome' );
  race.name = 'Gnome';
  race.description = '';
  race.stats = [ 'end+2', 'cha+2', 'str-2' ];
  race.gifts = [
    'size-P',
    'speed-slow',
    'dark-vision',
    'defensive-training[giant]',
    'hatred[reptilian]',
    'hatred[goblinoid]',
    'gnome-magics',
    'resistance[illusion]',
    'sharpened-sens',
    'war-weapon[gnome]'
  ];
  race.languages = [ 'common', 'gnome' ];
  race.availableLanguages = [ 'draconic', 'elf', 'giant', 'goblin', 'dwarf', 'orc' ];
  return race;
});

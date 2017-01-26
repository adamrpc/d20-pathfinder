'use strict';

angular.module('d20-pathfinder' ).factory('RaceHalfElf', function( AbstractRace ) {
  var race = new AbstractRace( 'half-elf' );
  race.name = 'Half-elf';
  race.description = '';
  race.stats = [ 'any+2' ];
  race.gifts = [
    'size-M',
    'speed-normal',
    'dark-vision',
    'talent',
    'elfic-immunity',
    'elfic-blood',
    'human-blood',
    'sharpened-sens',
    'multiple-talents'
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

'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceHalfOrc', function( AbstractRace ) {
  var race = new AbstractRace( 'half-orc' );
  race.name = 'Half-orc';
  race.description = '';
  race.stats = [ 'any+2' ];
  race.gifts = [
    'size-M',
    'speed-normal',
    'night-vision',
    'intimidating',
    'orc-blood',
    'human-blood',
    'orc-ferocity',
    'mastering[great-axe]',
    'mastering[2-handed cimetery]',
    'war-weapon[orc]'
  ];
  race.languages = [ 'common', 'orc' ];
  race.availableLanguages = [ 'abyssal', 'draconic', 'giant', 'gnoll', 'goblin' ];
  return race;
});

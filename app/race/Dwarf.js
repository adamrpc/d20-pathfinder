'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceDwarf', function( AbstractRace ) {
  var race = new AbstractRace( 'dwarf' );
  race.name = 'Dwarf';
  race.description = '';
  race.stats = [ 'end+2', 'wis+2', 'cha-2' ];
  race.gifts = [
    'size[M]',
    'slowly-but-surely',
    'night-vision',
    'greed',
    'knowledge[rock]',
    'defensive-training[giant]',
    'hatred[orc]',
    'hatred[golinoid]',
    'hardy',
    'steady',
    'mastering[battle-axe]',
    'mastering[heavy-war-peak]',
    'mastering[war-hammer]',
    'war-weapon[dwarf]'
  ];
  race.languages = [ 'common', 'dwarf' ];
  race.availableLanguages = [
    'common-depths',
    'giant',
    'gnome',
    'goblin',
    'orc',
    'earthy',
    'aquatic',
    'igneous',
    'aerial'
  ];
  return race;
});

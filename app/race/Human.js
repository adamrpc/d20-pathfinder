'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceHuman', function( AbstractRace ) {
  var race = new AbstractRace( 'human' );
  race.name = 'Human';
  race.description = '';
  race.stats = [ 'any+2' ];
  race.feats = [
    'size[M]',
    'blood[human]',
    'any',
    'skilled'
  ];
  race.languages = [ 'common' ];
  race.availableLanguages = [
    'abyssal',
    'aklo',
    'aquatic',
    'aerial',
    'celestial',
    'common-depths',
    'draconic',
    'elf',
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

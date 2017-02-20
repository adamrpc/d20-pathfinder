'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceDwarf', function( AbstractRace ) {
  var race = new AbstractRace( 'dwarf' );
  race.name = 'Dwarf';
  race.description = '';
  race.stats = [ 'con+2', 'wis+2', 'cha-2' ];
  race.feats = [
    'size[M]',
    'slow_and_steady',
    'dark_vision',
    'greed',
    'blood[dwarf]',
    'stonecunning',
    'defensive_training[giant]',
    'hatred[orc]',
    'hatred[golinoid]',
    'hardy',
    'stability',
    'weapon_proficiency[battle_axe]',
    'weapon_proficiency[heavy_war_peak]',
    'weapon_proficiency[war_hammer]'
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

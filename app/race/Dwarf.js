'use strict';

angular.module('d20-pathfinder' ).factory( 'RaceDwarf', function( AbstractRace ) {
  var race = new AbstractRace( 'dwarf' );
  race.name = 'Dwarf';
  race.description = '';
  race.stats = [ 'con+2', 'wis+2', 'cha-2' ];
  race.gifts = [
    'size[M]',
    'slowly_but_surely',
    'night_vision',
    'greed',
    'blood[dwarf]',
    'knowledge[rock]',
    'defensive_training[giant]',
    'hatred[orc]',
    'hatred[golinoid]',
    'hardy',
    'steady',
    'weapon_mastering[battle_axe]',
    'weapon_mastering[heavy_war_peak]',
    'weapon_mastering[war_hammer]'
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

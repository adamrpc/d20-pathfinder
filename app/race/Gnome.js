'use strict';

angular.module('d20-pathfinder' ).factory('RaceGnome', function( AbstractRace ) {
  var race = new AbstractRace( 'gnome' );
  race.name = 'Gnome';
  race.description = '';
  race.stats = [ 'con+2', 'cha+2', 'str-2' ];
  race.feats = [
    'size[P]',
    'low_light_vision',
    'blood[gnome]',
    'defensive_training[giant]',
    'hatred[reptilian]',
    'hatred[goblinoid]',
    'gnome_magics',
    'free_bard_spell[animal_communication]',
    'free_bard_spell[dancing_lights]',
    'free_bard_spell[prestidigitation]',
    'free_bard_spell[imaginary_sound]',
    'resistance[illusion]',
    'keen_senses'
  ];
  race.languages = [ 'common', 'gnome' ];
  race.availableLanguages = [ 'draconic', 'elf', 'giant', 'goblin', 'dwarf', 'orc' ];
  return race;
});

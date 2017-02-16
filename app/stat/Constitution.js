'use strict';

angular.module('d20-pathfinder' ).factory('StatConstitution', function( AbstractStat ) {
  var con = new AbstractStat( 'con' );
  con.min = 0;
  con.name = 'Constitution (Con)';
  con.description = 'Constitution represents health and stamina. A Constitution bonus increases hit points.';
  return con;
});

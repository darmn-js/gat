'use strict';

exports.getMetadata = function (entry) {
  var kind = entry.$content.general.kind;
  var image = entry.$content.image;
  var departament = entry.$content.general.metadata.departament;
  var town = entry.$content.general.metadata.town;
  var estate = entry.$content.general.metadata.estate;
  var collector = entry.$content.general.metadata.collector;
  return {
    kind: kind,
    image: image,
    departament: departament,
    town: town,
    estate: estate,
    collector: collector
  };
};

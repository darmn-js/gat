const vegetal_toc = function (doc) {
    if (doc.$type !== 'entry') return;
    var emitWithOwner = function (key, data) {
      for (var i = 0; i < doc.$owners.length; i++) {
        if (key == null) {
          emit([doc.$owners[i]], data);
        } else {
          emit([doc.$owners[i]].concat(key), data);
        }
      }
    };
    var customMap = function(doc) {
        if (doc.$type !== 'entry' || doc.$kind !== 'sample') return;
        var getGeneralKind = require('views/lib/getGeneralKind').getGeneralKind;
        var generalKind = getGeneralKind(doc)
        if (generalKind !== 'vegetal') return;
        var getReference = require('views/lib/getReference').getReference;
        var getId = require('views/lib/getId').getId;
        var getToc = require('views/lib/getToc').getToc;
        var reference = getReference(doc);
        var id = getId(doc);
        var toc = getToc(doc);
        toc.reference = reference;
        toc.id = id;
        toc.generalKind = generalKind;
        emitWithOwner(reference, toc);
    };
    customMap(doc);
}
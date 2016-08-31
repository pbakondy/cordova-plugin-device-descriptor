var exec = require('child_process').exec;

module.exports = function(context) {
  var Q = context.requireCordovaModule('q');
  var deferral = new Q.defer();

  // install underlying npm modules
  exec('cd ' + __dirname + ' && npm install', function callback(error, stdout, stderr) {
    deferral.resolve();
  });

  return deferral.promise;
}

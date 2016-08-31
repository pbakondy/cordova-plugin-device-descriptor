exports.defineAutoTests = function() {
  describe('Device Descriptor Information (window.descriptor)', function () {
    it('should exist', function() {
      expect(window.descriptor).toBeDefined();
    });

    it('should contain get that is a function', function() {
      expect(window.descriptor.get).toBeDefined();
      expect(typeof window.descriptor.get).toBe('function');
    });

  });
};

exports.defineManualTests = function(contentEl, createActionButton) {
  var logMessage = function (message, color) {
    var log = document.getElementById('info');
    var logLine = document.createElement('div');
    if (color) {
      logLine.style.color = color;
    }
    logLine.innerHTML = message;
    log.appendChild(logLine);
  };

  var clearLog = function () {
    var log = document.getElementById('info');
    log.innerHTML = '';
  };

  var device_tests = '<h3>Press Get Descriptor button to get Device information</h3>' +
    '<div id="dump_desc"></div>' +
    'Expected result: Status box will get updated with device info.';

  contentEl.innerHTML = '<div id="info"></div>' + device_tests;

  createActionButton('Get Descriptor', function() {
    clearLog();
    window.descriptor.get(
      function(result) {
        logMessage(JSON.stringify(result));
      },
      function(error) {
        logMessage(JSON.stringify(error));
      }
    );
  }, 'dump_desc');
};

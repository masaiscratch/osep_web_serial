var Avrgirl = require('../../');
var avrgirl = new Avrgirl({
  board: 'tinyduino',
  debug: true
});

var hex = __dirname + '/../../junk/hex/tinyduino/Blink.cpp.hex';

avrgirl.flash(hex, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('done.');
  }
});

$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'js/hex-codes.txt',
    dataType: 'text',
    success: function(data) {
      processData(data);
    }
  });

  function processData(allText) {
    const ALL_TEXT_LINES = allText.split(/\r\n|\n/),
          HEADERS = ALL_TEXT_LINES[0].split(','),
          TABLE = [];

    for (var i = 1; i < ALL_TEXT_LINES.length; i++) {
      const data = ALL_TEXT_LINES[i].split(',');

      if (data.length == HEADERS.length) {
        const ROW_OBJ = [];

        for (let j = 0; j < HEADERS.length; j++) {
          ROW_OBJ.push(data[j]);
        }

        TABLE.push(ROW_OBJ);
      }
    }
    console.table(TABLE);
  }
});

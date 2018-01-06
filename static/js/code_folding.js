function isCodeChunk(index) {
    return $(this).hasClass("r") || $(this).hasClass("python") ;
}

$(document).ready(function() {
  // add button to source code chunks
  $("pre").filter(isCodeChunk)
    .before(function(index, html) {
      if ( $(this).hasClass("fold") ) {
          return "<input class=\"tgl tgl-flip\" id=\"cb"
            + index + "\" type=\"checkbox\"/>";
      } else {
          return "<input class=\"tgl tgl-flip\" id=\"cb"
            + index + "\" type=\"checkbox\" checked/>";
     }
    })
    .before(function(index, html) {
      return "<label class=\"tgl-btn\" data-tg-off=\"Show Code\" " +
             "data-tg-on=\"Hide Code\" for=\"cb" + index + "\"></label>";
    })

  // hide all chunks with a "fold" class
  $("pre").filter(function() { return $(this).hasClass("fold") })
          .children("code")
          .hide();

  // functino to toggle the visibility
  $(".tgl-btn").click(function() {
    $(this).next()
           .children("code, img")
           .slideToggle('fast', 'swing');
  });
});

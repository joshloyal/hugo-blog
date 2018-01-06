$(document).ready(function() {
  // find all python code chunks
  $(".python").each(function() {
    // go into the code block
    $("code", this).each(function() {
        var text = $(this).text();

        // replace all instance of # !!space with an empty line
        text = text.replace(new RegExp("# !!space", "g"), "");
        $(this).text(text);
    });
  });
});

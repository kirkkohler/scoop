function hnCallback(data) {
    console.log(data);
    $.each(data.results, function( index, collection ) {
        $.each(collection, function( index, object ) {
          $("#hacker").append("<li><a href='"+ object.property1.href + "'>" + "<h2>" + object.property1.text + "</h2>" + "<p>" + object.source + "</p>" + "</a></li>" );
          $("#hacker a").attr("target","_blank");
      });
    });
};
$.ajax({
    "url":"http://www.kimonolabs.com/api/42ts6px8?apikey=363e7e1d3fffb45d424ad535ebdc233d&callback=hnCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});



function huntCallback(data) {
console.log(data);
$.each(data.results, function( index, collection ) {
  $.each(collection, function( index, object ) {
    $("#hunt").append("<li><a href='"+ object.prop.href + "'>" + "<h2>" + object.prop.text + "</h2>" + "<p>" + object.description + "</p>" + "</a></li>" );
    $("#hunt a").attr("target","_blank");
  });
});
};

$.ajax({
  "url":"http://www.kimonolabs.com/api/d1mh0elm?apikey=363e7e1d3fffb45d424ad535ebdc233d&callback=huntCallback",
  "crossDomain":true,
  "dataType":"jsonp"
});

function designerCallback(data) {
  console.log(data);
  $.each(data.results, function( index, collection ) {
    $.each(collection, function( index, object ) {
      var dnstory = object.story.text;
      object.story.text = dnstory.split("(")[0];
      $("#designer").append("<li><a href='"+ object.story.href + "'>" + "<h2>" + object.story.text + "</h2>" + "<p>" + object.property2.text + "</p>" + "</a></li>" );
      $("#designer a").attr("target","_blank");

    });
  });
};
$.ajax({
  "url":"http://www.kimonolabs.com/api/cultqmog?apikey=363e7e1d3fffb45d424ad535ebdc233d&callback=designerCallback",
  "crossDomain":true,
  "dataType":"jsonp"
});

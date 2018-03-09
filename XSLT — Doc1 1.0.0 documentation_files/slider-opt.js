$(document).ready(function(){
    // inject a button the page
    if($("#switch_mode").length == 0){
      var navbar = $("#navbar ul.nav");
      var li = navbar.children().first().clone();
      li.appendTo(navbar).children("a").attr("title", "Switch to Slide Mode").attr("href","#").attr("id", "switch_mode").text("Slide");
    }
    var options= {
      switch_selector: "#switch_mode",	
      /* Style Options */
      font_size_multiplier  : 1.5,
      element_to_remove: ["#navbar","footer.footer","div.col-md-3"],
      classes_to_remove:["col-md-9"],
      /* keys binding */
      keys: {switch:9},
      /* Sectionning Options */
      sectionning:{type:'parent', selector:'div.section'},
      /* Overflow Options */
      // type : | resize | box | new* | hidden | auto
      // overflow: auto | hidden | box | new* | resize
      overflow: "new",
      overflowing: [
        {type:'hidden', selector:'div.xpath_panel'},
        {type:'hidden', selector:'div.xslt_panel'},
        {type:'hidden', selector:'admonition .container'},
      ],
    };
    var o = new window.Slider.Slider(options);
    $(document).on("click", "#switch_mode", function(){
      o.init();
    });
});

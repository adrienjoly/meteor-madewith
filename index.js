if (Meteor.isClient) {
  console.log("[madewith] logging visit...");
  DDP.connect("http://france.meteor.com/").call("addCount", window.location.href, function(err, res){
    console.log("[madewith] result => ", err || res);
    setTimeout(function(){
      var a = document.createElement("a");
      a.href = "http://france.meteor.com/";
      a.target = "_blank";
      a.alt = "a French web app made with Meteor";
      a.title = "This proud French Meteor app was visited " + ((res || {}).visits || 0) + " times";
      a.setAttribute("style", "display:block;position:fixed;border:0 none;bottom:0px;right:0px;width:32px;height:32px;background-image:url(/packages/madewith/meteor-france.jpg);background-size:cover;");
      document.body.appendChild(a);
    }, 1000);
  });
}

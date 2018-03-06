var svg = document.getElementById("logo");
var s = Snap(svg);
var aussie = Snap.select('#australia');
var america = Snap.select('#usa');


var aussiePoints = aussie.node.getAttribute('d');
var americaPoints = america.node.getAttribute('d');


var toAmerica = function(){
  aussie.animate({ d: aussiePoints }, 5000, mina.linear, toAussie);
}

var toAussie = function(){
  aussie.animate({ d: americaPoints }, 5000, mina.linear, toAmerica);
}

var toAussieStart = function(){
  aussie.animate({ d: americaPoints },2000, mina.linear, toAmerica);
}

toAussieStart();

var chico = ["Bidwell Park", "Honey Run Bridge", "Sierra Nevada Brewery", "Five Mile Recreation Area", "Diamond Alley"];
var current= 0;

function shuffleGallery()
{
  do {
    var indx = Math.floor(Math.random() * (chico.length));
    current=chico[indx];
    if (current != indx) {
    console.log(current);
    }
  }
  while(current != chico[indx]);
}

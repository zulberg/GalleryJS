var chico = ["Bidwell Park", "Honey Run Bridge", "Sierra Nevada Brewery", "Five Mile Recreation Area", "Diamond Alley"];

function shuffleGallery()
{
  Math.floor(Math.random(chico) * 4);
  for(var ind=0; ind<chico.size; ind++) {
    print(ind);
  }
}

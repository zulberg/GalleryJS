var chico = [
  {description: "Bidwell Park",
  picture: "http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg",
  from: "bidwellpark.org"
  },
  {description: "Honey Run Bridge",
  picture: "http://californiathroughmylens.com/wp-content/uploads/2015/09/Honey-Run-Bridge-6.jpg",
  from: "californiathroughmylens.com"
  },
  {description: "Sierra Nevada Brewery",
  picture: "http://www.belgardcommercial.com/FILE/11377/sierranevada_beauty.jpg",
  from: "belgardcommercial.com"
  },
  {description: "Five Mile Recreation Area",
  picture: "http://www.chicorealestate.net/area_photos/park/five_mile_recreation_area-xl2326_18_54_14.jpg",
  from: "chicorealestate.com"
  },
  {description: "Diamond Alley"
  picture: "https://farm5.staticflickr.com/4038/4627204089_3e79637e62_b.jpg",
  from: "farm5.staticflickr.com"
];

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

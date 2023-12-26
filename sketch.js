function setup() {
    createCanvas(500, 800);
    stroke(255)
    strokeWeight(4)
    if(!touch){
      line(Constellations[0].first[0].x+13,Constellations[0].first[0].y+13,Constellations[0].first[1].x+13,Constellations[0].first[1].y+13);
      line(Constellations[0].first[1].x+13,Constellations[0].first[1].y+13,Constellations[0].first[2].x+13,Constellations[0].first[2].y+13);
      line(Constellations[0].first[2].x+13,Constellations[0].first[2].y+13,Constellations[0].first[5].x+13,Constellations[0].first[5].y+13);
      line(Constellations[0].first[2].x+13,Constellations[0].first[2].y+13,Constellations[0].first[6].x+13,Constellations[0].first[6].y+13);
      line(Constellations[0].first[6].x+13,Constellations[0].first[6].y+13,Constellations[0].first[3].x+13,Constellations[0].first[3].y+13);
      line(Constellations[0].first[4].x+13,Constellations[0].first[4].y+13,Constellations[0].first[3].x+13,Constellations[0].first[3].y+13);
    }

  }
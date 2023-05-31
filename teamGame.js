// dolphins = 96 108 and 89, koalas - 88, 91, 110
// dolphins = 97 112 and 101, koalas - 109, 95, 123

function averageScore(scoresList) {
  totalScore = 0;
  for (score of scoresList) {
    totalScore += score;
  }
  return totalScore / scoresList.length;
}

dolphins = [96, 108, 89];
koalas = [88, 91, 110];
// dolphins = [97, 112, 101];
// koalas = [109, 95, 123];
const dolphinsAverage = averageScore(dolphins);
console.log("Dolphins = " + dolphinsAverage);
const koalasAverage = averageScore(koalas);
console.log("Koalas = " + koalasAverage);
const minScore = 100;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) {
  console.log("Dolphins wins the match!!");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= minScore) {
  console.log("Koalas wins the match!!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore) {
  console.log("Match is Drawn");
} else {
  console.log("Nobody wins");
}

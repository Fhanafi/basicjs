let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break;
    case "j":
    case "q":
    case "k":
    case "a":
      count--
      break;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2); 
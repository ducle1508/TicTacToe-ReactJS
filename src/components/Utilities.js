export function checkSubset(parentArray, subsetArray) {
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
}

export function checkWin(moves) {
  const winMoves = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let p in moves) {
    for (let w of winMoves) {
      if (checkSubset(moves[p], w)) {
        return p;
      }
    }
  }

  let movesMade = Object.values(moves).flat(1);
  if (movesMade.length === 9) {
    return "Tie";
  }
  return "";
}

export const players = {
  "Player 1": {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "turquoise",
    text: "Player 1, you're up!",
  },
  "Player 2": {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "yellow",
    text: "Player 2, you're up!",
  },
  "Default": {
    id: 3,
    name: "Default",
    iconClass: "fa-dice",
    colorClass: "turn-start",
    text: "Determine turn",
  },
};

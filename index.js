const baseArray = [
  {
    url: "",
    height: 50,
  },
  {
    url: "",
    height: 100,
  },
  {
    url: "",
    height: 300,
  },
  {
    url: "",
    height: 250,
  },
  {
    url: "",
    height: 100,
  },
];

// step 1
const baseObject = {
  colFirst: [],
  colSecond: [],
  colThird: [],
};

// step 2
let sortedArray = baseArray.sort((a, b) => {
  return b.height - a.height;
});

// step 3
const colLength = 3;
const totalHeight = sortedArray.reduce((acc, curr) => {
  return acc + curr.height;
}, 0);

const averageHeight = totalHeight / colLength;

let step = "colFirst";

for (let i = 0; i < sortedArray.length; i++) {
  if (!baseObject[step].length) {
    baseObject[step].push(sortedArray[i]);
    continue;
  }
  if (
    baseObject[step].reduce((acc, curr) => {
      return acc + curr.height;
    }, 0) +
      sortedArray[i].height <=
    averageHeight
  ) {
    baseObject[step].push(sortedArray[i]);
    continue;
  } else if (
    baseObject[step].reduce((acc, curr) => {
      return acc + curr.height;
    }, 0) +
      sortedArray[i].height >
    averageHeight
  ) {
    step =
      step === "colFirst"
        ? "colSecond"
        : step === "colSecond"
        ? "colThird"
        : "colFirst";
    baseObject[step].push(sortedArray[i]);
  } else {
    step =
      step === "colFirst"
        ? "colSecond"
        : step === "colSecond"
        ? "colThird"
        : "colFirst";
    --i;
  }
}

console.log(baseObject, averageHeight);

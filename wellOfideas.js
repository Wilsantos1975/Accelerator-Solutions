
const ideas = ["bad", "good", "good", "bad", "good"]




const wellOfIdeas = (ideas) => {
  let counter = 0;

  for (idea of ideas) {
    if (idea === "good") {
      counter++;
      if (counter > 2) {
        return "I smell a series!"; // here are implementing the early return. better than break
      }
    }
  }
  if (counter > 0) {
    return "Publish!";
  } else {
    return "Fail!";
  }
};

console.log(wellOfIdeas(ideas));
//O(n) time complexity
//O(1) space complexity
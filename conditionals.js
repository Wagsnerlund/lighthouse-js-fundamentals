const temperature = 20;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves aren't going to cut it.")
} else {
  console.log("Short sleeves will be fine!")
}

console.log("Now your're ready to go outside!");

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a good idea...");
}
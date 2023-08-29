const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  //increment the delay time by 50ms each round
  delay += 50;
}
// add the new line at the end after all the characters have been printed
setTimeout(() => process.stdout.write("\n"), delay);

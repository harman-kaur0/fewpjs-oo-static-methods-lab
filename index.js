class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(str) {
    let arr = str.split(" ").map((e) => e[0].toUpperCase() + e.slice(1));
    let words = [
      "The",
      "A",
      "An",
      "But",
      "Of",
      "And",
      "For",
      "At",
      "By",
      "From",
    ];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < words.length; j++) {
        if (arr[i] === words[j]) {
          arr[i] = arr[i].toLowerCase();
        }
      }
    }
    return arr.join(" ")[0].toUpperCase() + arr.join(" ").slice(1);
  }
}

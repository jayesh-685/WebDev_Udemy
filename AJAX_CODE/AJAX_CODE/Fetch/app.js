fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
    // res body is not parsed, it is a readable stream that we have to call the json function on, which returns a promise so again we have to use .then and .catch for it
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// wherever there are promises we can use await with try and catch
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();

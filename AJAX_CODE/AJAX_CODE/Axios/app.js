// need to import it since it's a third party libraray and not native to js
// it uses fetch behind the scenes

// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
      //  data is already parsed 
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

// just rewriting the above code using await
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);

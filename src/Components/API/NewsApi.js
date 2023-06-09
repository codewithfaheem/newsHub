import axios from "axios";
// import { store } from '../../store/store';

const getNewsData = async (newsCategory) => {
  // console.log(store.getState())

  return new Promise((resolve) => {
    let key = "19VqnfqHtrCwCSGYwJtwhUl7bVxleKL2";

    axios
      .get(
        `https://api.nytimes.com/svc/news/v3/content/all/${newsCategory}.json?api-key=${key}`
      )
      .then((a) => {
        resolve(a);
      });

    // axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&apiKey=75c91c83c007473f88fa5b03ac9198bc`).then((a) => {
    //     resolve(a)
    // })
  });
};

export default getNewsData;

// Constants declaration
 const NEWS_URL = "https://newsapi.org/v2";
const API_KEY = "51cb6a8c719e45bf81fe37e21d70882a";

// Function to get news
async function getNews(keyword) {
  const sevenDaysAgo = new Date(
    Date.now() - 7 * 24 * 3600 * 1000
  ).toDateString();
  const today = new Date().toDateString();

  return await fetch(
    `${NEWS_URL}/everything?q=${keyword}&from=${sevenDaysAgo}&to=${today}&pageSize=100&apiKey=${API_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      return data.articles;
    }
    )
    .catch((error) => {
      console.error(error);
    }
    );
    
}

export default getNews;

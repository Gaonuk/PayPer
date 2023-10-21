const getArticlesQuery = `
  query GetArticles {
    articles(first: 5) {
      id
      name
      freeContent
      journalist
      encryptedUrl
      price
      date
      newsType
    }
  }
`

export default getArticlesQuery;
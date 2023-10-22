const getArticlesQuery = `
  query GetArticles {
    articles(first: 10, orderDirection: desc, orderBy: date) {
      id
      name
      freeContent
      journalist
      encryptedUrl
      price
      date
      newsType
      imageUrl
    }
  }
`

export default getArticlesQuery;
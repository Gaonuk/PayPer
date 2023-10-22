"use client"

import MoreArticles from '../components/more-articles'
import HeroPost from '../components/hero-post'
import { useEffect, useState } from 'react'
import { ArticleData } from '@/types'
import { useGetArticles } from '@/integrations/subgraph/hooks'
import { useApolloClient } from '@/integrations/subgraph/client'

export default function Index({ preview }: any) {
  const [heroPost, setHeroPost] = useState<ArticleData>();
  const [moreArticles, setMoreArticles] = useState<ArticleData[]>([]);
  const client = useApolloClient();

  const fetchArticles = async () => {
    const articles = await useGetArticles({ client });
    setHeroPost(articles[0])
    setMoreArticles(articles.slice(1))
  }

  useEffect(() => {
    if (!client) return;
    fetchArticles();
  }, [client])

  return (
    <>
      {heroPost && (
        <HeroPost
          title={heroPost.name}
          coverImage={heroPost.imageUrl}
          date={heroPost.date}
          journalist={heroPost.journalist}
          id={Number(heroPost.id)}
          excerpt={heroPost.freeContent}
          newsType={heroPost.newsType}
        />
      )}
      {moreArticles.length > 0 && <MoreArticles articles={moreArticles} />}
    </>
  )
}

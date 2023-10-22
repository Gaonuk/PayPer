import { notFound, useParams } from "next/navigation"
import { Editor } from "@/components/editor"
import { Address, ArticleData } from "@/types"
import { useApolloClient } from "@/integrations/subgraph/client";
import { useGetArticleById } from "@/integrations/subgraph/hooks";
import { useMemo, useState } from "react";

async function getPostForUser(articleId: number, userAddress: Address) {
  const client = useApolloClient();
  return await useGetArticleById({
    client,
    articleId
  });
}

export default function EditorPage() {
  const [article, setArticle] = useState<ArticleData>();
  const params = useParams();
  const client = useApolloClient();
  const fetchArticle = async (articleId: number) => {
    const data = await useGetArticleById({
      client,
      articleId
    });
    setArticle(data);
  }
  const number = "13";

  useMemo(() => {
    if (!client) return;
    if (!params) return;
    if (!params.id) return;
    fetchArticle(Number(params.id));
  }, [params]);

  return (
    <Editor
      post={{
        id: article ? article.id.toString() : number,
        title: article ? article.name : "Untitled Post",
        content: "",
      }}
    />
  )
}
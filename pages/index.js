import { useState, useEffect } from "react";
import Head from "next/head";
import ArticleItem from "components/article-item";
import request from "utils/request";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticle() {
      const res = await request("/v2/latest-article", {
        params: {
          language: "VN",
          page: 1,
          isIgnoreFeatureArticle: true,
        },
      });
      setArticles(res?.data?.docs);
    }
    fetchArticle();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container grid grid-cols-12 gap-3 px-3 mx-auto">
        <div
          className={
            "col-span-12 md:col-span-9 lg:col-span-6 xl:col-span-5 border rounded-lg divide-y"
          }
        >
          {articles.map((_, index) => (
            <ArticleItem
              key={index}
              avatar={"/v1621748084728/nQ7lrJxnS.jpeg"}
              name={"Rahul"}
              userName={"mcxim"}
              publishDate={"May 27, 2021"}
              slug={"asynchronous-programming-in-javascript"}
              title={"Asynchronous Programming in JavaScript"}
              category={"Javascript"}
              tags={"javascript,learning,asynchronous"}
              excerpt={
                "They say time is the fourth measurement in our universe. I say that nonconcurrent(asynchronous) computer programs are the fourth element of your rationale. You wanna raise your coding to this new even out of authority? Let's read this post."
              }
              coverImage={"/v1622095969334/EDkvIgxJ7.png"}
              likeCount={1}
              commentCount={2}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

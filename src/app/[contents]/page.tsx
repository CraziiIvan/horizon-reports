import { calculatePeriod, generateRouteName } from "@/_utils/helper";
import { Clock } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

async function getNews() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d673550910bf45e88fec9414519f0f79`,
    {
      next: {
        revalidate: 5
      }
    }
  );
  const result = await response.json();

  return result.articles;
}

type TNew = {
  source: { id: number; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
};

export default async function Home({params}: {params: {contents: string}}) {
  const news: TNew[] = await getNews();

  return (
    <main className=" pt-8">
      <div className=" grid grid-cols-12 divide-x">
        <div className="col-span-8 pr-4">
          <Link href={`/${params.contents}/${generateRouteName(news[0].title)}`}>
          <article className=" cursor-pointer group">
            <h1 className=" pb-5 px-2 text-2xl font-medium group-hover:opacity-90 group-hover:underline">
              {news[0].title}
            </h1>
            <figure className=" w-full aspect-video relative">
              <Image
                fill
                src={news[0].urlToImage}
                alt="heading_news_img"
                className=" object-cover"
              />
            </figure>
            <div className="py-3 px-2">
              <p className=" text-sm text-neutral-500">{news[0].content}</p>
              <span className=" flex mt-2 items-center gap-x-1 text-sm">
                <Clock />
                {calculatePeriod(news[0].publishedAt)}
              </span>
            </div>
          </article>
          </Link>
        </div>
        <div className=" col-span-4 grid grid-cols-1 divide-y divide-neural-300 pl-4 -mt-3">
          {news.slice(1, 4).map((item) => {
            return (
              <Link href={`/${params.contents}/${generateRouteName(news[0].title)}`}>
                <article className=" cursor-pointer group pt-3">
                <figure className=" w-full aspect-video relative">
                  <Image
                    fill
                    src={item.urlToImage}
                    alt="heading_news_img"
                    className=" object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </figure>
                <div className="py-3 px-2">
                  <h1 className=" text-lg font-medium pb-2 group-hover:opacity-90 group-hover:underline">
                    {item.title}
                  </h1>
                  <p className=" text-sm text-neutral-500">
                    {item.description}
                  </p>
                  <span className=" flex mt-2 items-center gap-x-1 text-sm">
                    <Clock />
                    {calculatePeriod(item.publishedAt)}
                  </span>
                </div>
              </article>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

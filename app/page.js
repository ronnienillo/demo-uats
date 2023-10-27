import Image from "next/image";
import Link from "next/link";
import Accordion from "./components/Accordion";



async function getArticles(limit){
  const res = await fetch(`https://demo.uats.site/api/uat-articles?pagination%5BpageSize%5D=${limit}`);
  return res.json();
}

export default async function Home() {
  const articles3 = await getArticles('3');
  const articles6 = await getArticles('6');
  const articles7 = await getArticles('7');
  const articles8 = await getArticles('8');
  const articles12 = await getArticles('12');

  return (
    <main className="px-4 pb-12">
      <div className="max-w-[1200px] mx-auto">
        
        <ul className="grid gap-[15px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 first-3">
          {articles6.data.map(article => (
            <li key={article.id}>
              
                <div className="aspect-video bg-zinc-300 rounded-lg mb-[10px] relative overflow-hidden">
                  <div className="w-20 h-8 px-3.5 py-1 bg-red-700 rounded-tr-lg justify-start items-end gap-2.5 inline-flex absolute bottom-0 left-0">
                    <div className="text-zinc-100 text-sm font-semibold">Games</div>
                  </div>
                </div>
              
                <h3 className="text-[#181D2F] text-base font-semibold  truncate  text-ellipsis overflow-hidden mb-[15px]">{article.title}</h3>
              
            </li>
          ))}
        </ul>

        <div className="sm:flex flex-wrap mx-[-15px] mt-[56px] sm:mt-[70px]">
          <div className="sm:w-3/6 md:w-4/6 px-[15px]">
            <h2 className="text-[#181D2F] text-2xl font-semibold">News</h2>
            <div className="border-b-2 border-black mt-[15px]"></div>
            <ul className="grid gap-[15px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[20px] first-3">
              {articles12.data.map(article => (
                <li key={article.id} className="">
                  
                  <div className="aspect-video bg-zinc-300 rounded-lg mb-[10px] relative overflow-hidden">
                    <div className="w-20 h-8 px-3.5 py-1 bg-red-700 rounded-tr-lg justify-start items-end gap-2.5 inline-flex absolute bottom-0 left-0">
                      <div className="text-zinc-100 text-sm font-semibold">Games</div>
                    </div>
                  </div>
                  
                  <h3 className="text-[#181D2F] text-base font-semibold  truncate  text-ellipsis overflow-hidden mb-[15px]">{article.title}</h3>

                </li>
              ))}
            </ul>
            <div className="text-center mt-[20px] mb-[40px] sm:mb-0">
              <Link href={'/'} className="text-red-700 text-lg font-semibold">Load more news</Link>
            </div>

          </div>
          <div className="sm:w-3/6 md:w-2/6 px-[15px]">
            <h2 className="text-[#181D2F] text-2xl font-semibold">News</h2>
            <div className="border-b-2 border-black mt-[15px]"></div>
            <ul>
              {articles6.data.map(article => (
                <li key={article.id} className="mt-[20px]">
                  <h3 className="text-[#181D2F] text-xs font-semibold mb-[5px] flex items-start"><Image src="chat_alt.svg" width="24" height="24" alt="icon" className="mr-[5px] shrink-0"/><span className="truncate pt-[3px]">{article.title}</span></h3>
                  <div className="pb-2.5 border-b border-neutral-300">
                    <p className="text-[#626262] text-xs font-medium truncate">{article.summary}</p>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div className="sm:flex flex-wrap mx-[-15px] mt-[56px] sm:mt-[70px]">
          <div className="sm:w-3/6 md:w-4/6 px-[15px]">
            <h2 className="text-[#181D2F] text-2xl font-semibold mb-[10px]">News</h2>
            <div className="pb-[10px]">
              <p className="text-[#626262] text-base font-semibold">Competition is fierce in the online slots industry, with many big developers vying for<br/>players’ attention. Learn more about the top software providers below.<br/></p>
            </div>
            <div className="border-b-2 border-black mt-[15px]"></div>

            <ul className="grid gap-[15px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[20px]">
              {articles3.data.map(article => (
                <li key={article.id} className="flex flex-col justify-start">
                  <div className="aspect-video bg-zinc-300 rounded-lg mb-[10px] relative overflow-hidden flex flex-col justify-center items-center">
                    <div className="text-black text-xs font-semibold">NET ENT</div>
                  </div>
                  <div className="p-3">
                    <p className="text-base font-normal mb-[10px]">{article.summary}</p>
                  </div>
                  <div className="px-3 pb-3 mt-auto">
                    <Link href={article.slug} className="block bg-red-700 p-3.5 rounded text-white font-medium text-center">Read More</Link>
                  </div>
                </li>
              ))}
            </ul>

          </div>
          <div className="sm:w-3/6 md:w-2/6 px-[15px] mt-[40px] sm:mt-0">
            <h2 className="text-[#181D2F] text-2xl font-semibold">News</h2>
            <div className="border-b-2 border-black mt-[15px]"></div>
            <ul>
              {articles8.data.map(article => (
                <li key={article.id} className="mt-[20px] flex mx-[-15px]">
                  <div className="px-[15px] w-4/12 md:w-2/5 lg:w-4/12">
                    <div className="aspect-video bg-zinc-300 rounded-lg"></div>
                  </div>
                  <div className="pr-[15px] w-8/12 md:w-3/5 lg:w-8/12">
                    <span className="text-neutral-500 text-xs font-medium">{article.publishedAt}</span>
                    <h3 className="text-[#181D2F] text-xs font-semibold underline truncate">{article.title}</h3>
                    <p className="text-neutral-500 text-xs font-medium mt-[5px]">Game Provider</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-[#181D2F] text-2xl font-semibold mt-[40px] sm:mt-[20px]">News</h2>
        <div className="border-b-2 border-black mt-[15px]"></div>
        <ul className="mt-[20px]">
          {articles7.data.map(article => (

            <Accordion 
              key={article.id} 
              id={article.id} 
              title={article.title}
              summary={article.summary}
               />

          ))}
        </ul>
        
      </div>

    </main>
  )
}

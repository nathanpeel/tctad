import { getChapter } from "./utils";
import Markdown from "react-markdown";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  GrFormNextLink,
  GrFormPreviousLink,
  GrHomeRounded,
} from "react-icons/gr";
import { GiClubs } from "react-icons/gi";
import { PiPokerChipFill } from "react-icons/pi";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug: route } = params;

  const chapter = getChapter(route + ".md");
  let content, data;
  //Error checking
  if (chapter) {
    const { content: dContent, data: dData } = chapter;
    content = dContent;
    data = dData;
  } else {
    redirect("/not-found");
  }

  const navigation = (
    <div className="flex items-center justify-center gap-20">
      <Link
        href={"/read/ch" + data.index}
        hidden={data.index > 0 ? false : true}>
        <GrFormPreviousLink className="w-8 h-8" />
      </Link>
      <Link href="/">
        <GrHomeRounded className="w-8 h-8" />
      </Link>
      <Link
        href={"/read/ch" + (data.index + 2)}
        hidden={data.index < 27 ? false : true}>
        <GrFormNextLink className="w-8 h-8" />
      </Link>
    </div>
  );

  return (
    <div className="min-h-dvh flex justify-center pb-10">
      <main className="flex flex-col px-10 max-w-[800px]">
        {navigation}
        <div className="flex flex-col items-center gap-5 my-32 text-center">
          <h2 className="sm:text-3xl text-xl">{data.chapterNumber}</h2>
          <h1 className="sm:text-4xl text-2xl">{data.title}</h1>
          <GiClubs className="sm:h-16 sm:w-16 h-10 w-10" />
        </div>
        <Markdown
          components={{
            h1(props) {
              const { node, ...rest } = props;
              return <p className="mb-2" {...rest}></p>;
            },
            h2(props) {
              const { node, ...rest } = props;
              return (
                <div
                  {...rest}
                  className="flex items-center justify-center my-16 gap-3">
                  <PiPokerChipFill className="w-10 h-10" />
                  <PiPokerChipFill className="w-10 h-10" />
                  <PiPokerChipFill className="w-10 h-10" />
                </div>
              );
            },
            p(props) {
              const { node, ...rest } = props;
              return <p className="indent-8 mb-2" {...rest}></p>;
            },
          }}
          className="mb-20 sm:text-base text-sm">
          {content}
        </Markdown>
        {navigation}
      </main>
    </div>
  );
}

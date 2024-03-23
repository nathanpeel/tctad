import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import ContentWarning from "./ContentWarning";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  interface Chapter {
    route: string;
    title: string;
  }
  const titleArray = [
    "A Chicken in the Fox Den",
    "Through the Fox Den",
    "South Zone Road",
    "One Shot",
    "Rejection",
    "Eight of Clubs",
    "Motivate Times and Poem Rhymes",
    "Rules of the Game",
    "Overwhelmed",
    "Shuffling the Deck",
    "Rocks and Secrets",
    "The Mentorship",
    "The First Payout",
    "To Lose Thyself",
    "Taking Off the Hood",
    "A Boy of His Word",
    "Shade Under Sunlight",
    "Venganza",
    "Where to Sit",
    "Influence",
    "Pandora or Eve?",
    "Benedict Arnold",
    "The Gamble",
    "Blue Car",
    "Dissolution",
    "The Attack",
    "Her Keys",
  ];
  const chapterStore: Chapter[] = [];
  for (let i = 0; i < 27; i++) {
    const chapterItem: Chapter = {
      route: "ch" + String(i + 1),
      title: titleArray[i],
    };
    chapterStore.push(chapterItem);
  }

  return (
    <main className="lg:px-20 px-10 flex lg:flex-row flex-col lg:items-start items-center justify-center lg:gap-40 gap-10">
      <div className="lg:w-[500px] flex flex-col">
        <Image
          src="/cover.png"
          height={500}
          width={500}
          alt="cover photo"
          className="rounded-sm"></Image>
        <div className={playfair.className}>
          <h1 className="text-4xl mt-8 font-semibold">
            The Cards That Are Dealt
          </h1>
          <h2 className="text-3xl mt-2 mb-10 font-semibold">Nathan Peel</h2>
          <p className="font-bold mb-7">
            &quot;There is no mercy in this club.&quot;
          </p>
        </div>
        <p>
          Fifteen-year-old Marshal Álvarez seeks the antidote to his problems
          from a highly-organized, secret gambling club within his high school.
          Here, students take part in poker games, sports betting, and other
          forms of gambling.{" "}
        </p>
        <p>
          Despite coming from a low-income family living in a slummy apartment,
          Marshall attends a high school in a rich neighborhood. He feels out of
          place and is desperate for change in his social life. Trevor and his
          best friend Josh, as well as other classmates, are set on treating
          Marshall as inferior. Along with that, Marshal finds out his
          grandmother has cancer, but his family doesn’t have enough money to
          pay for the treatment. Marshall struggles to come up with ways to help
          make the needed $10,000 until he comes across a mysterious gambling
          club within his high school. He must push past Trevor’s bullying, his
          alcoholic mom, and feeling depressed. Otherwise, he will fail to save
          his grandma and fail to prove himself.{" "}
        </p>
        <ContentWarning />
        <Link
          href="https://www.barnesandnoble.com/w/the-cards-that-are-dealt-nathan-peel/1140571256?ean=9781737742807"
          target="_blank"
          className="underline mb-3 w-60">
          Buy a physical copy here
        </Link>
        <Link href="/publish-info" className="underline w-56 mb-3">
          Publishing information
        </Link>
        <Link
          href="https://www.buymeacoffee.com/nathanpeel"
          className="underline w-56"
          target="_blank">
          Buy me a coffee ☕❤️
        </Link>
        <p className="mt-8">
          This book is free to read, but all rights to distribute, edit, and
          sell are reserved to Nathan Peel.
        </p>
      </div>
      <div>
        <h2 className="text-4xl mb-4">Chapters</h2>
        <div className="underline leading-loose">
          <ol className="list-decimal list-inside">
            {chapterStore.map((el) => (
              <li key={crypto.randomUUID()}>
                <Link href={"read/" + el.route}>{el.title}</Link>
              </li>
            ))}
          </ol>
          <Link href="/read/ch28">Acknowledgments</Link>
        </div>
      </div>
    </main>
  );
}

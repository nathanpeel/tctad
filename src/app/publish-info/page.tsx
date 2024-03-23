import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";

export default function Page() {
  return (
    <main className="min-h-dvh flex justify-center px-5">
      <div className="flex flex-col items-center w-full max-w-[800px] gap-4 sm:text-base text-sm">
        <Link href="/">
          <GrHomeRounded className="w-10 h-10 mb-10"/>
        </Link>
        <h1 className="sm:text-3xl text-2xl text-center mb-12">Publishing Information</h1>
        <div className="flex flex-col items-center text-center">
          <p>
            This book is a work of fiction. Any references to historical events,
            real people, or real places are used fictitiously. Other names,
            characters, places, and events are products of the author&apos;s
            imagination, and any resemblance to actual events or places or
            persons, living or dead, is entirely coincidental.
          </p>
          <p>Copyright © 2021 by Nathan Peel</p>
          <p>All rights reserved</p>
          <p>Published in the United States of America</p>
          <p>Cover, interior design, and website by Nathan Peel</p>
          <p>Paperback ISBN: 978-1-7877428-0-7</p>
          <p>Ebook ISBN: 978-1-7377428-1-4</p>
          <p>Second Edition ISBN: TBD</p>
          <p>
            Content warning: domestic violence, drug abuse, alcohol abuse,
            bullying, cancer
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-center">Editions</h2>
          <p>
            This website provides the unofficial second edition of the novel.
            This second edition has a new cover and minor changes to the text.
            This second edition will eventually be released officially as a
            physical copy and eBook. This free website will remain available.
          </p>
          <p>The original edition is available as a paperback and eBook.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-center">Dedication</h2>
          <em>For all those who are doubted, stand strong</em>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-center">Donate</h2>
          <Link
            href="https://www.buymeacoffee.com/nathanpeel"
            className="underline"
            target="_blank">
            Buy me a coffee ☕❤️
          </Link>
        </div>
      </div>
    </main>
  );
}

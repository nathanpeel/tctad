import path from "path";
import fs from "fs";
import matter from "gray-matter";

//returns the text from a specific file within the chapters directory
function extractText(fileName: string): string | false {
  const absoluteFilePath = path.join(process.cwd(), "./chapters/" + fileName);
  try {
    return fs.readFileSync(absoluteFilePath, 'utf-8');
  } catch (error) {
    return false;
  }
}

export type chapterType = {
  content: string,
  data: {
    title: string,
    route: string, //filename without extension
    chapterNumber: string,
    index: number,
  }
}

//turns the markdown strings into a readable object including metadata.
function getMarkdownData(markdown: string): chapterType {
  //deconstruct to escape library types
  const { content, data } = matter(markdown)
  const { title, route, chapterNumber, index,} = data;
  return {
    content,
    data: {
      title,
      route,
      chapterNumber,
      index,
    }
  };
}

/** function that combines the extractText and getMarkdownData functions into one for use in components **/
export function getChapter(fileName: string): chapterType | false {
  const text = extractText(fileName);
  if (typeof text === 'string') {
    return getMarkdownData(text);
  } else {
    return false;
  }
}
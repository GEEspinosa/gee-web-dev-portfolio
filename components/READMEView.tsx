import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


export default function READMEView ({content}: {content: string}) {
    return (
    <div className="markdown-content p-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>{content}</ReactMarkdown>
    </div>)
}
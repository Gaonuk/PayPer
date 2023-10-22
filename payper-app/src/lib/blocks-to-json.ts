import { OutputBlockData, OutputData } from "@editorjs/editorjs";

export default function jsonToMarkdown(data: OutputData) {
  let markdown = '';

  data.blocks.forEach((block: OutputBlockData) => {
    markdown += mapBlockToMarkdown(block);
  });
  console.log(markdown)

  return markdown;
}


function mapBlockToMarkdown(block: OutputBlockData) {
  switch (block.type) {
    case 'header':
      return `## ${block.data.text}\n\n`;
    case 'paragraph':
      return `${block.data.text}\n\n`;
    default:
      return '';
  }
}
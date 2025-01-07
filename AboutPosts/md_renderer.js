import {marked} from 'https://cdn.jsdelivr.net/npm/marked@4.3.0/lib/marked.esm.min.js';
import YAML from 'https://cdn.jsdelivr.net/npm/yaml@2.2.1/browser/index.js';


export async function md_renderer(md_url) {
    try {
        const rawbaseURL = "https://raw.githubusercontent.com/Whji/Whji.github.io/refs/heads/main/AboutPosts/"
        console.log(`md_url: ${md_url}`);
        const response = await fetch(`${rawbaseURL}${md_url}`);
        console.log(`response: ${response}`);
        console.log(response);
        if (!response.ok){
            throw new Error(`Failed to fetch markdown: ${response.statusText}`);
        }
        const response_text = await response.text();
        const frontMatterRegex = /^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/;
        const parsed_response = response_text.match(frontMatterRegex);
        if (!parsed_response) {
            throw new Error('Invalid Markdown format: Missing YAML Front Matter');
        }

        const metadata = YAML.parse(parsed_response[1]);
        const htmlcontent = marked(parsed_response[2]);

        return {
            metadata, 
            htmlcontent,
        };
    } catch(error) {
        return  {
            metadata: {},
            htmlcontent: `<p>Error leading markdown: ${error.message}</p>`
        };
    }
}
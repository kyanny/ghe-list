import { parseFeed } from "./deps.ts";
import { urlParse } from "./deps.ts";
import { parse } from "./deps.ts";


export const fetchFeed = async (url : string) => {
    const response = await fetch(url);
    const xml = await response.text();
    const feed = await parseFeed(xml);
    return feed;
}

export const getUrls = (feed : any) => {
    return feed.entries.map((entry : any) => entry.id);
}

export const getVersions = (urls : Array<string>) => {
    const versions = urls.map(url => {
        return parse(urlParse(url).pathname).base;
    })
    return versions;
}

export const getAlfredWorkflowJsonItems = (urls : Array<string>) => {
    const items = urls.map(url => {
        const version = parse(urlParse(url).pathname).base;
        return {
            "title": version,
            "subtitle": url,
            "arg": url,
            "mods": {
                "cmd": {
                    "valid": true,
                    "arg": version,
                    "subtitle": version
                }
            }
        }
    });
    return items;
}

export const print = (str : string) => {
    const contentBytes = new TextEncoder().encode(str);
    Deno.writeAllSync(Deno.stdout, contentBytes);
}

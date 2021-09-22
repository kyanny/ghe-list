import { Command, EnumType } from "https://deno.land/x/cliffy/command/mod.ts";
import { parseFeed } from "https://deno.land/x/rss/mod.ts";
import { urlParse } from 'https://deno.land/x/url_parse/mod.ts';
import { parse } from "https://deno.land/std@0.108.0/path/mod.ts";

const format = new EnumType(["short", "alfred-workflow-json"]);
const { options } = await new Command()
    .name("ghe-list")
    .version("1.0.0")
    .description("GitHub Enterprise Server Releases")
    .type("format", format)
    .option<{ format: typeof format }>("-f, --format [method:format]", "output format")
    .parse(Deno.args);

const response = await fetch(
  "https://enterprise.github.com/releases.rss",
);
const xml = await response.text();
const feed = await parseFeed(xml);
const urls = feed.entries.map(entry => entry.id);

if (options.format === "short") {
    const versions = urls.map(url => {
        return parse(urlParse(url).pathname).base;
    })
    const contentBytes = new TextEncoder().encode(versions.join("\n"));
    Deno.writeAllSync(Deno.stdout, contentBytes);
} else if (options.format === "alfred-workflow-json") {
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
    const contentBytes = new TextEncoder().encode(JSON.stringify({items: items}));
    Deno.writeAllSync(Deno.stdout, contentBytes);
} else {
    const contentBytes = new TextEncoder().encode(urls.join("\n"));
    Deno.writeAllSync(Deno.stdout, contentBytes);
}

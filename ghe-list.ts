import { Command, EnumType } from "./deps.ts";
import { fetchFeed, getUrls, getVersions, getAlfredWorkflowJsonItems, print } from "./mods.ts";

const format = new EnumType(["short", "alfred-workflow-json"]);
const { options } = await new Command()
    .name("ghe-list")
    .version("1.0.0")
    .description("GitHub Enterprise Server Releases")
    .type("format", format)
    .option<{ format: typeof format }>("-f, --format [method:format]", "output format")
    .parse(Deno.args);

const urls = getUrls(await fetchFeed("https://enterprise.github.com/releases.rss"));

if (options.format === "short") {
    const versions = getVersions(urls);
    print(versions.join("\n"));
} else if (options.format === "alfred-workflow-json") {
    const items = getAlfredWorkflowJsonItems(urls);
    print(JSON.stringify({ items: items }));
} else {
    print(urls.join("\n"));
}

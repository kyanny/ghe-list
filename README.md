# ghe-list

Tiny utility command to list and filter [GitHub Enterprise Server Releases](https://enterprise.github.com/releases) easily.

Designed to work with `grep`, [fzf](https://github.com/junegunn/fzf) and [Alfred](https://www.alfredapp.com/).

## Prerequisites

- [Deno](https://deno.land/)
- [Ruby](https://www.ruby-lang.org/ja/) and [Rake](https://github.com/ruby/rake)(usually bundled with Ruby) to generate a single executable binary file
## Installtation

```
rake
./ghe-list -h
```

If you want, `rake install` will install `ghe-list` command to */usr/local/bin/ghe-list*. If it fails with the permission error, try `sudo rake install`.

## Usage

```
ghe-list -h
```

Works with `fzf`.

<video src="https://user-images.githubusercontent.com/10515/134658051-a801bf1f-d368-48c1-8ba7-cb82d671fe4e.mov
"/>

Works with `grep` and `sort`.

<video src="https://user-images.githubusercontent.com/10515/134663726-c784f4f4-aca9-4bf0-8c85-35517a403422.mov
"/>

Works with Alfred. It requires [Alfred Powerpack](https://www.alfredapp.com/powerpack/) because it runs with the Alfred Workflow.

Alfred Workflow file is available at https://github.com/kyanny/ghe-list/blob/main/ghe-list.alfredworkflow.

If you want to copy only version number, press Cmd and hit Enter (Return).

<video src="https://user-images.githubusercontent.com/10515/134658028-2ec266ce-58f2-4a58-9420-e6a00003fb97.mov
"/>

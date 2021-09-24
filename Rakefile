require 'json'
require 'rake/clean'
CLOBBER.include('ghe-list')

task :default => 'ghe-list'
desc 'Compile ghe-list'
file 'ghe-list' => ['ghe-list.ts'] do
  deno_dir = JSON.parse(`deno info --json`)['denoDir']
  sh "deno compile --allow-net=enterprise.github.com --allow-env=DENO_DIR,HOME --allow-read=#{deno_dir} --allow-write=#{deno_dir} ghe-list.ts"
end

desc 'Install ghe-list'
task :install => 'ghe-list' do
  sh 'install ghe-list /usr/local/bin/ghe-list'
end

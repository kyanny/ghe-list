require 'rake/clean'
CLOBBER.include('ghe-list')

task :default => 'ghe-list'
desc 'Compile ghe-list'
file 'ghe-list' => ['ghe-list.ts'] do
  sh 'deno compile --allow-net ghe-list.ts'
end

desc 'Install ghe-list'
task :install => 'ghe-list' do
  sh 'install ghe-list /usr/local/bin/ghe-list'
end
console.log('🚀 Starting deploy...');

const ghpages = require('gh-pages');

console.log('📦 gh-pages module loaded');

ghpages.publish('dist', {
  repo: 'https://github.com/fatmaindex/My-Portfolio.git',
  branch: 'gh-pages'
}, function (err) {
  if (err) {
    console.error('❌ Deploy failed:', err);
    process.exit(1);
  } else {
    console.log('✅ Deployed successfully!');
    process.exit(0);
  }
});

console.log('⏳ Waiting for publish to finish...');
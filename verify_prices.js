const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const remainingBUY = html.match(/BUY NOW \$\d+/g);
const remainingPriceRow = html.match(/class=["']price-row["']/g);
const remainingDollar = html.match(/\$\d+/g);

console.log('Remaining BUY NOW $:', remainingBUY);
console.log('Remaining price-row:', remainingPriceRow);
console.log('Remaining $ values count:', remainingDollar ? remainingDollar.length : 0);
if (remainingDollar) {
  console.log('Sample $ values:', remainingDollar.slice(0, 10));
}

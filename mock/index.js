const api_test01 = require('./api-test01.json');
const api_test02 = require('./api-test02.json');

module.exports = () => ({
    person: api_test01.person,
    shop: api_test02.shop,
    products: api_test02.products
});
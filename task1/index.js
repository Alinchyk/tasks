const PATTERN = 'gid://shopify/Product/';

const obj = {
  id: 8030546067682,
  admin_graphql_api_id: 'gid://shopify/Product/8030546067682',
};

// Написать функцию которая будет принимать admin_graphql_api_id и возвращать REST API id
const fnA = function (id) {
  // return id.split("/").pop();
  return id.replaceAll(PATTERN, '');
  // return id.replace(/gid:\/\/shopify\/Product\//g, '');
};

console.log(fnA(obj.admin_graphql_api_id)); // 8030546067682

// Написать функцию которая будет принимать REST API id (8030546067682 || "8030546067682"), возвращать "gid://shopify/Product/8030546067682"
const fnB = function (id) {
  return `${id}`.includes(PATTERN) ? id : PATTERN + id;
};

console.log(fnB(obj.id)); // "gid://shopify/Product/8030546067682"

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCustomer = exports.getCustomerById = exports.deleteCustomer = exports.addCustomer = exports.getCustomers = void 0;
var apiEndPoint = "http://training.pyther.com:3000/api/book";

var getCustomers = function getCustomers() {
  return fetch(apiEndPoint, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  })["catch"](function (error) {
    console.log(error);
  });
};

exports.getCustomers = getCustomers;

var addCustomer = function addCustomer(customer) {
  return fetch(apiEndPoint, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(customer)
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  })["catch"](function (error) {
    console.log(error);
  });
};

exports.addCustomer = addCustomer;

var deleteCustomer = function deleteCustomer(customer) {
  return fetch(apiEndPoint, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(customer)
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  })["catch"](function (error) {
    console.log(error);
  });
};

exports.deleteCustomer = deleteCustomer;

var getCustomerById = function getCustomerById(id) {
  return fetch(apiEndPoint + "/" + id, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  })["catch"](function (error) {
    console.log(error);
  });
};

exports.getCustomerById = getCustomerById;

var updateCustomer = function updateCustomer(customer) {
  return fetch(apiEndPoint, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(customer)
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  })["catch"](function (error) {
    console.log(error);
  });
};

exports.updateCustomer = updateCustomer;
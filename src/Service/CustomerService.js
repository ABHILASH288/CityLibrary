var apiEndPoint = "http://training.pyther.com:3000/api/book";

export var getCustomers = () =>{
    return fetch(apiEndPoint, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}

export var addCustomer = (customer) =>{
    return fetch(apiEndPoint, {
        method: 'post',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}

export var deleteCustomer = (customer) =>{
    return fetch(apiEndPoint, {
        method: 'delete',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}
export var getCustomerById =  (id) =>{
    return fetch(apiEndPoint+"/"+id, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}
export var updateCustomer = (customer) =>{
    return fetch(apiEndPoint, {
        method: 'put',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}
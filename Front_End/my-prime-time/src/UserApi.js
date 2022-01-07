/* eslint-disable import/no-anonymous-default-export */
const LoginUser = async (userObject) =>  {
    let response = await fetch('http://localhost:8000/token-auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    })
    return response
};

const getUserLogin = (token) => {
    return (fetch('http://localhost:8000/core/current_user/', {
        headers:{
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`
        }

    }))
};

const signupUser = (userObject) => {
    return fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    }).then(res => res)
  };



export default {
    LoginUser,
    getUserLogin,
    signupUser
}
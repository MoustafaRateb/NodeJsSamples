const users = [];

const isValidUser = (inputUser)=>{
    let user = users.find(u=>u.username === inputUser.username && u.password === inputUser.password);
    return user != null; 
}

module.exports = {users,isValidUser};
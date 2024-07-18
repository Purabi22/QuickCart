let users = [];

const UserService = {
  register: (name, email, password) => {
    if (users.find(user => user.email === email)) {
      return { success: false, message: 'Email already registered' };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    return { success: true, message: 'Registration successful' };
  },

  login: (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      return { success: true, message: 'Login successful', user };
    }
    return { success: false, message: 'Invalid email or password' };
  }
};

export default UserService;

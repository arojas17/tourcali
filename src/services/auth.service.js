import axios from 'axios';

const API_URL = 'http://localhost:9095/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'logear', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'registrar', {
      id: 0,
      nombre: user.nombre,
      apellido: user.apellido,
      correo: user.correo,
      user: user.user,
      password: user.password,
      rol: 1
    });
  }
}

export default new AuthService();

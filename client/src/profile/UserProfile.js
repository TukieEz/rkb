import { makeAutoObservable } from "mobx";
import { jwtDecode } from "jwt-decode";

export default class UserProfile {
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  async checkAuth() {
    const token = localStorage.getItem('token'); // Получаем токен из localStorage
    console.log('Токен из localStorage:', token); // Лог для отладки
  
    if (!token) {
        console.warn('Токен отсутствует');
        this.setIsAuth(false);
        return;
    }

    try {
        const decodedUser = jwtDecode(token); // Декодируем токен
        console.log('Декодированный пользователь:', decodedUser);
      
        // Проверяем наличие необходимых данных в токене
        if (!decodedUser.name || !decodedUser.surname) {
            throw new Error('Токен повреждён или некорректен');
        }

        this.setUser({
            name: decodedUser.name,
            middlename: decodedUser.middlename,
            surname: decodedUser.surname,
            deptId: decodedUser.deptId,
            permissionId: decodedUser.permissionId,
            specId: decodedUser.specId,
            sex: decodedUser.sex,
        });
        this.setIsAuth(true);
    } catch (e) {
        console.error('Ошибка при обработке токена:', e.message);
        this.setIsAuth(false);
    }
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
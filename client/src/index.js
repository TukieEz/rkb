import React, { createContext, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProfile from './profile/UserProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null);

const AppWithAuthCheck = () => {
  const user = useMemo(() => new UserProfile(), []); // Оборачиваем создание объекта в useMemo
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (localStorage.getItem('token')) {
        try {
          await user.checkAuth();
        } catch (e) {
          console.error('Ошибка авторизации:', e);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [user]); // Зависимость user теперь стабильна благодаря useMemo

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Context.Provider value={{ user }}>
      <App />
    </Context.Provider>
  );
};

root.render(
  <React.StrictMode>
    <AppWithAuthCheck />
  </React.StrictMode>
);
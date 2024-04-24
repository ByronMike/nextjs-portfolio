import { useState, useEffect } from 'react';
import { User } from '@/types/hooks/user';

export const useGitHubUserData = (dataUser: string, authToken: string) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${dataUser}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const userData: User = await userResponse.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataUser, authToken]);

  return { user };
};

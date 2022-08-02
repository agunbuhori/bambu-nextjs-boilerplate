export const authenticate = async (credentials: {
  username: string;
  password: string;
}): Promise<boolean> => {
  console.log(credentials);

  return false;
};

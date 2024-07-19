import bcrypt from 'bcrypt';

let saltRound = 10;

export const hashingPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(saltRound);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword);
};

/* This TypeScript code snippet is a module that provides functions for hashing and comparing passwords
using the bcrypt library. Here's a breakdown of what each part of the code does: */
import bcrypt from 'bcrypt';

let saltRound = 10;

export const hashingPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(saltRound);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword);
};

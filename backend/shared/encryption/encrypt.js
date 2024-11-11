import bcrypt from 'bcrypt';

export const hashing={
    SALT: 10,
    passwordHash(plainPWD){
       return bcrypt.hashSync(plainPWD, this.SALT)
    },
    matchPassword(plainPWD, dbPWD){
        return bcrypt.compareSync(plainPWD, dbPWD);
    }
}
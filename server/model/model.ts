import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

export const User = model('User', UserSchema);

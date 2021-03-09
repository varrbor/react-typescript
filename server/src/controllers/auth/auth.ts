import User from '../../models/user';
import { Response, Request } from 'express';
import config from 'config';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

// import { IUser } from '../../types/user';

export const login = async (req:Request,res: Response) =>{
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при входе',
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль' });
    }

    const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
      expiresIn: '30d',
    });

    res.json({ message: 'Вход выполнен', data: { token, userId: user.id } });
  } catch (e) {
    res.status(500).json({
      message: 'Что-то пошло не так...',
    });
  }

}

export const register = async (req:Request, res:Response) =>{
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации',
      });
    }
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).json({ message: 'Пользователь уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'Пользователь создан!' });
  } catch (e) {
    res.status(500).json({
      message: 'Что-то пошло не так...',
    });
  }
}

//   //handle errors
//   const handleErrors = (err) => {
//
//   let errors = { email: "", password: "",name:"" };
//
//   // duplicate email error
//   if (err.code === 11000) {
//     errors.email = 'that email is already registered';
//     return errors;
//   }
//
//   // validation errors
//   if (err.message.includes('user validation failed')) {
//     Object.values(err.errors).forEach(({ properties }) => {
//
//       errors[properties.path] = properties.message;
//     });
//   }
//
//   return errors;
// }

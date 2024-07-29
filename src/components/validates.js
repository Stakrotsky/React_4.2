import * as yup from 'yup';

export const Schema = yup.object().shape({
	email: yup
		.string()
		.email('Неверный формат электронной почты')
		.required('Электронная почта обязательна'),
	password: yup
		.string()
		.min(9, 'Длина пароля должна быть больше 8 символов')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w!]*$/,
			'Пароль должен содержать строчные и заглавные буквы, цифры и символ "!"',
		)
		.required('Пароль обязателен'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
		.required('Подтверждение пароля обязательно'),
});

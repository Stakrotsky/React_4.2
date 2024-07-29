import styles from './form.module.css';
import { useRef, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Schema } from './components/validates';
import { SendData } from './components/sendData';

export const Form = () => {
	const submitButtonRef = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		setFocus,
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Schema),
	});

	const onSubmit = (data) => {
		SendData(data);
		reset();
	};

	useEffect(() => {
		if (isValid && submitButtonRef.current) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<div className={styles['registration-form']}>
			<h2>Регистрация</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{errors.email && (
					<div className={styles.error}>{errors.email.message}</div>
				)}
				{errors.password && (
					<div className={styles.error}>{errors.password.message}</div>
				)}
				{errors.confirmPassword && (
					<div className={styles.error}>{errors.confirmPassword.message}</div>
				)}

				<input
					type="email"
					{...register('email')}
					placeholder="Email"
					className={styles['registration-input']}
					onFocus={() => setFocus('email')}
				/>
				<input
					type="password"
					{...register('password')}
					placeholder="Пароль"
					className={styles['registration-input']}
					onFocus={() => setFocus('password')}
				/>
				<input
					type="password"
					{...register('confirmPassword')}
					placeholder="Повторите пароль"
					className={styles['registration-input']}
					onFocus={() => setFocus('confirmPassword')}
				/>
				<button
					ref={submitButtonRef}
					className={styles['registration-button']}
					type="submit"
					disabled={!isValid}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};

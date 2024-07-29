import styles from './form.module.css';

export const Form = () => {
	return (
		<div className={styles['registration-form']}>
			<h2>Регистрация</h2>
			<form>
				<input
					type="email"
					name="email"
					placeholder="Email"
					className={styles['registration-input']}
				/>
				<input
					className={styles['registration-input']}
					type="password"
					name="password"
					placeholder="Пароль"
				/>
				<input
					className={styles['registration-input']}
					type="password"
					name="confirmPassword"
					placeholder="Повторите пароль"
				/>
				<button className={styles['registration-button']} type="submit" disabled>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};

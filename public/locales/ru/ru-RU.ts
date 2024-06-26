import { locale_content_type, locale_meta } from "@/public/locales/interface";

export const ru_ru = {
	meta: {
		language: {
			code: "ru",
			en_name: "Russian",
			locale_name: "Русский",
		},
		region: {
			code: "RU",
			name: "Russia",
			display_name: "Россия",
		},
	} satisfies locale_meta,

	content: {
		globals: {
			site: {
				full_name: "Менеджер Модов Cosmic Reach",
				short_name: "CRMM",
			},
			mods: "Моды",
			resource_packs: "Пакеты ресурсов",
			modpacks: "Модпаки",
			shaders: "Шейдеры",

			continue: "Продолжить",
			confirm: "Подтвердить",
			cancel: "Отмена",
			delete: "Удалить",
			remove: "Удалить",
			link: "Ссылка",
			messages: {
				something_went_wrong: "Что-то пошло не так",
				email_sent_successfully: "Письмо успешно отправлено",
				error_sending_email: "Произошла ошибка при отправке письма",
				internal_server_error: "Внутренняя ошибка сервера",
				invalid_request: "Неверно составленный запрос",
				invalid_token: "Неверный токен",
				expired_token: "Истёкший токен",
				cancelled_successfully: "Успешно отменено",
			},
		},
		api_responses: {
			user: {
				invalid_form_data: "Неверная дата в форме",
				username_not_available: "Это имя пользователя недоступно, попробуйте другое",
				profile_update_success: "Профиль успешно обновлён",
				something_went_wrong_try_again: "Что-то пошло не так! Пожалуйста, попробуйте ещё",
				email_and_pass_required: "Почта и пароль обязательны",
				no_account_exists_with_that_email: "Аккаунта с этой почтой не существует",
				incorrect_email_or_pass: "Неверная почта или пароль",
				incorrect_password: "Неверный пароль",
				login_success: "Успешный вход",
				cant_unlink_the_last_auth_provider: "Вы не можете отвязать единственного провайдера аутентификации",
				successfully_removed_provider: "Провайдер ${0} успешно убран",
				invalid_password: "Неправильный пароль. ${0}",
				successfully_removed_password: "Пароль успешно убран",
				successfully_added_new_password: "Новый пароль успешно добавлен",
				password_login_not_enabled: "Пароль нельзя изменить, так как он не был установлен.",
				password_login_not_enabled_desc:
					"Пароль можно изменять только на тех аккаунтах, на которых он был добавлен. Если вы этого не делали, вы можете попробовать использовать провайдера аутентификации для входа.",
				successfully_deleted_account: "Ваш аккаунт был успешно удалён",
				cancelled_account_deletion: "Удаление аккаунта успешно отменено",
			},
		},
		auth: {
			dashboard: "Личный кабинет",
			settings: "Настройки",
			your_profile: "Ваш профиль",
			email: "Почта",
			password: "Пароль",
			sign_up: "Зарегистрироваться",
			login: "Войти",
			sign_out: "Выйти",
			invalid_session_msg: "Неверная локальная сессия",
			signing_out: "Выходим",
			something_went_wrong: "Что-то пошло не так",

			login_page: {
				meta_desc: "Войдите в Менеджер Модов Cosmic Reach, чтобы получить доступ к новым возможностям.",
				dont_have_an_account: "Не зарегистрированы?",
				forgot_password_msg: "Не помните свой пароль?",
				log_in_using: "Войти, используя:",
				invalid_email_msg: "Введите правильную почту",
				invalid_password_msg: "Введите правильный пароль",
			},
			singup_page: {
				meta_desc: "Зарегистрируйтесь, чтобы иметь возможность загружать на Менеджер Модов Cosmic Reach",
				signup_using_providers: "Войти, используя один из провайдеров авторизации",
				already_have_an_account: "Уже зарегистрированы?",
			},
			change_password_page: {
				change_password: "Сменить пароль",
				meta_desc: "Смените ваш пароль от CRMM.",
				email_sent_desc: "Перейдите по ссылке, отправленной на указанную почту и смените пароль.",
			},
			action_verification_page: {
				invalid_token: "Истёкший или неверный токен",
				didnt_request_email: "Не запрашивали письмо?",
				check_sessions: "Проверить активные сессии",
				verify_new_password: "Подтвердите новый пароль",
				add_new_password_desc:
					"Новый пароль был недавно добавлен на ваш аккаунт. Подтвердите ниже, что это были вы. Новый пароль не будет работать до подтверждения.",
				delete_account: "Удалить аккаунт",
				delete_account_desc:
					"Удаление вашего аккаунта приведет к потере всех данных, кроме ваших проектов. Отменить это действие будет невозможно.",
				enter_password: "Введите новый пароль",
				re_enter_password: "Повторите новый пароль",
				max_password_length_msg: "Пароль может состоять максимум из ${0} символов",
				password_dont_match: "Пароли не совпадают",
				cancelled_successfully: "Успешно отменено",
				password_changed: "Пароль успешно изменён",
				new_password: "Новый пароль",
				confirm_new_password: "Подтвердите новый пароль",
			},
		},
		home_page: {
			hero: {
				description: {
					line_1: "Лучшее место для модов [Cosmic Reach].",
					line_2: "Открывайте, играйте и создавайте контент, всё в одном месте.",
				},
				explore_mods: "Исследовать моды",
			},
			featured_section: {
				popular_mods: "Популярные моды",
				popular_resource_packs: "Популярные пакеты ресурсов",
			},
		},
		user_profile_page: {
			meta_desc: "Профиль ${0}'s на CRMM",
		},

		settings_page: {
			meta_desc: "Настройки аккаунта",
			account_section: {
				meta_title: "Настройки аккаунта",
				account: "Аккаунт",
				user_profile: "Профиль пользователя",
				edit: "Редактировать",
				edit_profile: "Редактировать профиль",
				enter_username: "Введите ваше имя пользователя",
				enter_name: "Введите ваше имя",
				username_max_chars_limit: "Имя пользователя может состоять максимум из ${0} символов",
				name_max_chars_limit: "Имя может состоять максимум из ${0} символов",
				pfp_provider: "Провайдер аватарки",
				username: "Имя пользователя",
				full_name: "Полное имя",
				save_profile: "Сохранить профиль",
				account_security: "Безопасность аккаунта",
				add_a_password_msg: "Добавьте пароль к аккаунту для входа",
				change_account_password: "Изменить пароль аккаунта",
				add_password: "Добавить пароль",
				remove_password: "Удалить пароль",
				enter_your_password: "Введите пароль",
				remove_account_password: "Удалить пароль из аккаунта",
				manage_auth_providers: "Настройки провайдеров аутентификации",
				manage_auth_providers_desc: "Добавьте или удалите способы входа.",
				manage_providers_label: "Настроить провайдеров",
				provider_email_tooltip: "Почта, привязанная к ${0} аккаунту",
				auth_providers_label: "Провайдеры аутентификации",
				link_a_provier: "Привязать провайдера ${0}",
				delete_account: "Удалить аккаунт",
				deletion_email_sent_desc:
					"Письмо для подтверждения было отправлено на указанную почту. Подтвердите, чтобы удалить аккаунт.",
				account_deletion_desc:
					"Удаление аккаунта будет невозможно отменить. Это приведёт к удалению всех ваших данных кроме проектов с наших серверов.",
				confirm_to_delete_account: "Вы уверены, что хотите удалить свой аккаунт?",
			},
			sessions_section: {
				sessions: "Сессии",
				meta_desc: "Управлять активными сессиями",
                view_page: "Просмотреть страницу",
				sensitive_info_warning: "Предупреждение: Персональные данные",
				session_page_warning_message:
					"Эта страница содержит такие персональные данные, как ваш IP-Адрес и местоположение. Пожалуйста, не отправляйте скриншоты, записи экрана и любую другую информацию с этой страницы посторонним людям.",
				page_desc: {
					line_1:
						"Активные сессии. Вы можете остановить каждую из них.",
					line_2:
						"Если вы видите незнакомую сессию, закройте её и измените пароль от аккаунта.",
				},
				current_session: "Текущая сессия",
				timestamp_template: "${day} ${month}, ${year} в ${hours}:${minutes} ${amPm}",
				last_used: "Последнее использование",
				created: "Создано",
				time_past_phrases: {
					// should be in lower case, adjust the position of ${0} according to the translation in other languages
					just_now: "только что",
					minute_ago: "${0} минуту назад",
					minutes_ago: "${0} минут назад",
					hour_ago: "${0} час назад",
					hours_ago: "${0} часов назад",
					day_ago: "${0} день назад",
					days_ago: "${0} дней назад",
					week_ago: "${0} неделю назад",
					weeks_ago: "${0} недель назад",
					month_ago: "${0} месяц назад",
					months_ago: "${0} месяцев назад",
					year_ago: "${0} год назад",
					years_ago: "${0} лет назад",
				},
				session_created_using_provider: "Эта сессия была создана через провайдера ${0}",
				revoke_session: "Закрыть сессию",
			},
		},

		footer: {
			site_desc: "Отличное место для контента по Cosmic Reach. Моды, шейдеры, пакеты ресурсов, модпаки и многое другое",
			socials: "Социальные сети",
			explore: "Исследовать",
			privacy_policy: "Политика конфиденциальности",
			terms: "Условия использования",
			change_theme: "Изменить тему",
		},
	} satisfies locale_content_type,
};
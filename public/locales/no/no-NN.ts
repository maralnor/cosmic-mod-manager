import { locale_content_type, locale_meta } from "@/public/locales/interface";

export const no_nn = {
	meta: {
		language: {
			code: "no",
			en_name: "Norwegian",
			locale_name: "Norsk",
		},
		region: {
			code: "NN",
			name: "Nynorsk",
			display_name: "Nynorsk",
		},
	} satisfies locale_meta,

	content: {
		globals: {
			site: {
				full_name: "Cosmic Reach Mod Manager",
				short_name: "CRMM",
			},
			mods: "Modifikasjoner",
			resource_packs: "Ressurspakker",
			modpacks: "Modpakker",
			shaders: "Shaders",

			continue: "Hald fram",
			confirm: "Stadfest",
			cancel: "Avbryt",
			delete: "Slett",
			remove: "Fjern",
			link: "Link",
			messages: {
				something_went_wrong: "Noko gjekk gale",
				email_sent_successfully: "E-post vart send suksessfullt",
				error_sending_email: "Feil skjedde ved sending av E-poststadfesting",
				internal_server_error: "Intern serverfeil",
				invalid_request: "Ugyldig førespurnad",
				invalid_token: "Ugyldig token",
				expired_token: "Utgått token",
				cancelled_successfully: "Avbrut suksessfullt",
			},
		},
		api_responses: {
			user: {
				invalid_form_data: "Ugyldig formdata",
				username_not_available: "Det brukarnamnet er ikkje tilgjengeleg. Prøv noko anna",
				profile_update_success: "Suksessfullt oppdaterte profil",
				something_went_wrong_try_again: "Noko gjekk gale! Prøv igjen",
				email_and_pass_required: "E-post og passord krevst",
				no_account_exists_with_that_email: "Det finst ikkje ein konto med den E-postadressa",
				incorrect_email_or_pass: "Feil E-post eller passord",
				incorrect_password: "Feil passord",
				login_success: "Logga inn suksefult",
				cant_unlink_the_last_auth_provider: "Du kan ikkje fjerne den siste gjenverande autentisering-leverandøren",
				successfully_removed_provider: "Suksessfullt fjerna autentisering-leverandøren ${0}",
				invalid_password: "Ugyldig passord. ${0}",
				successfully_removed_password: "Fjerna passord suksessfullt",
				successfully_added_new_password: "La til nytt passord suksessfullt",
				password_login_not_enabled: "Du kan ikkje endra passordet, når du ikke har aktivert innlogging med passord.",
				password_login_not_enabled_desc:
					"Berre kontoar som har eit passord knytt til som kan endra passordet. Du kan bruka ein autentisering-leverandør for å logga inn viss du ikkje har passord.",
				successfully_deleted_account: "Sletta kontoen din suksessfullt",
				cancelled_account_deletion: "Avbraut sletting av konto suksessfullt",
			},
		},
		auth: {
			dashboard: "Framside",
			settings: "Innstillingar",
			your_profile: "Profilen din",
			email: "E-post",
			password: "Passord",
			sign_up: "Registrer deg",
			login: "Logg inn",
			sign_out: "Logg ut",
			invalid_session_msg: "Ugyldig lokal økt",
			signing_out: "Loggar ut",
			something_went_wrong: "Noko gjekk gale",

			login_page: {
				meta_desc: "Logg inn i Cosmic Reach Mod Manager for å få ei meir personleg oppleving.",
				dont_have_an_account: "Har du ikkje ein konto?",
				forgot_password_msg: "Gløymt passordet ditt?",
				log_in_using: "Logg inn med:",
				invalid_email_msg: "Skriv inn ei gyldig E-postadresse",
				invalid_password_msg: "Skriv inn eit gyldig passord",
			},
			singup_page: {
				meta_desc: "Registrer deg for å ha en konto for å kunna lasta opp til Cosmic Reach mod manager",
				signup_using_providers: "Registrer deg ved hjelp av ein av dei følgjande autentiserings-leverandørane",
				already_have_an_account: "Har du allereie ein konto?",
			},
			change_password_page: {
				change_password: "Endre passordet",
				meta_desc: "Tilbakestill passordet til kontoen din for Cosmic Reach Mod Manager.",
				email_sent_desc: "Opne lenkja som vart send til E-posten din for å endra passordet ditt.",
			},
			action_verification_page: {
				invalid_token: "Utgått eller ugyldig token",
				didnt_request_email: "Bad du ikkje om denne E-posten?",
				check_sessions: "Sjekk innlogga økter",
				verify_new_password: "Stadfest det nye passordet ditt",
				add_new_password_desc:
					"Eit nytt passord har nyleg vorte lagt til kontoen din. Stadfest nedanfor viss dette er deg. Det nye passordet vil ikkje fungera før då.",
				delete_account: "Slett kontoen din",
				delete_account_desc:
					"Viss du slettar kontoen din, blir alle dataa fjerna dine bortsett frå prosjekta dine frå databasen vår. Det er ingen veg tilbake etter at du har sletta kontoen din.",
				enter_password: "Skriv inn ditt nye passord",
				re_enter_password: "Skriv inn passordet på nytt",
				max_password_length_msg: "Passordet ditt kan maksimalt ha ${0} teikn",
				password_dont_match: "Passorda er ikkje like",
				cancelled_successfully: "Avbraut suksessfullt",
				password_changed: "Suksessfullt endra passordet",
				new_password: "Nytt passord",
				confirm_new_password: "Stadfest det nye passordet",
			},
		},
		home_page: {
			hero: {
				description: {
					line_1: "Den beste plassen for dine modifikajsoner for [Cosmic Reach].",
					line_2: "Oppdag, spel, og skap innhald, alt på ein plass.",
				},
				explore_mods: "Utforsk modifikasjoner",
			},
			featured_section: {
				popular_mods: "Populære modifikasjoner",
				popular_resource_packs: "Populære ressurspakker",
			},
		},
		user_profile_page: {
			meta_desc: "${0}'s profil på Comsic Reach Mod Manager",
		},

		settings_page: {
			meta_desc: "Kontoinnstillingar",
			account_section: {
				meta_title: "Kontoinnstillingar",
				account: "Konto",
				user_profile: "Brukarprofil",
				edit: "Rediger",
				edit_profile: "Rediger profil",
				enter_username: "Skriv inn brukarnamnet ditt",
				enter_name: "Skriv inn namnet ditt",
				username_max_chars_limit: "Brukarnamnet ditt kan berre ha maksimalt ${0} teikn",
				name_max_chars_limit: "Namnet ditt kan berre ha maksimalt ${0} teikn",
				pfp_provider: "Leverandør av profilbilete",
				username: "Brukernamn",
				full_name: "Fult namn",
				save_profile: "Lagre profil",
				account_security: "Kontotryggleik",
				add_a_password_msg: "Legg til eit passord for å kunna bruka påloggingsinformasjon for å logga inn",
				change_account_password: "Endre passordet ditt til kontoen din",
				add_password: "Legg til passord",
				remove_password: "Fjern passord",
				enter_your_password: "Skriv inn passordet ditt",
				remove_account_password: "Fjern passordet til kontoen din",
				manage_auth_providers: "Administrer autentiserings-leverandørar",
				manage_auth_providers_desc: "legg til eller fjern metodar for å logga inn til kontoen din.",
				manage_providers_label: "Administrer leverandørar",
				provider_email_tooltip: "E-posten til den linka kontoen ${0}",
				auth_providers_label: "Autentiserings-leverandørar",
				link_a_provier: "Link leverandøren {0}",
				delete_account: "Slett konto",
				deletion_email_sent_desc:
					"Ei E-poststadfesting er send til E-postadressa di. Stadfest via E-posten for å sletta kontoen din.",
				account_deletion_desc:
					"Det er ingen veg tilbake etter du har sletta kontoen din. Sletting av kontoen din vil fjerna all dataet din frå serveren vår, untatt prosjekta dine.",
				confirm_to_delete_account: "Er du verkeleg sikker på at du vil sletta kontoen din?",
			},
			sessions_section: {
				sessions: "økter",
				meta_desc: "Administrer innlogga økter",
				view_page: "Vis side",
				sensitive_info_warning: "Åtvaring: Sensitiv informasjon",
				session_page_warning_message:
					"Denne sida inneheld sensitiv informasjon som IP-adressa og posisjonen din. Pass på at du ikkje sender skjermbilete, opptak eller informasjon frå denne sida til personar du ikkje vil skal ha denne informasjonen.",
				page_desc: {
					line_1:
						"Her er alle einingane som er logga inn i kontoen din akkurat no. Du kan velja å tvinga dei til å logga ut individuelt her.",
					line_2:
						"Viss du ser ei økt du ikkje kjenner igjen, så logg ut av den eininga og endra passordet til kontoen som var logga inn i.",
				},
				current_session: "Noverande økt",
				timestamp_template: "${day}/${month}/${year} ved ${hours}:${minutes} ${amPm}",
				last_used: "Sist brukt",
				created: "Oppretta",
				time_past_phrases: {
					// should be in lower case, adjust the position of ${0} according to the translation in other languages
					just_now: "akkurat no",
					minute_ago: "${0} minutt sidan",
					minutes_ago: "${0} minuttar sidan",
					hour_ago: "${0} time sidan",
					hours_ago: "${0} timar sidan",
					day_ago: "${0} dag sidan",
					days_ago: "${0} dagar sidan",
					week_ago: "${0} veke sidean",
					weeks_ago: "${0} veker sidan",
					month_ago: "${0} månad sidan",
					months_ago: "${0} månadar sidan",
					year_ago: "${0} år sidan",
					years_ago: "${0} år sidan",
				},
				session_created_using_provider: "Denne økta vart oppretta ved hjelp av leverandøren ${0}.",
				revoke_session: "Opphev økta",
			},
		},

		footer: {
			site_desc: "Modifikasjonar, shaders, ressurspakkar, modpakkar, og meir for Cosmic Reach, alt på éin stad. ",
			socials: "Sosialt",
			explore: "Utforsk",
			privacy_policy: "Retningslinjer for personvern",
			terms: "Vilkår",
			change_theme: "Endre tema",
		},
	} satisfies locale_content_type,
};

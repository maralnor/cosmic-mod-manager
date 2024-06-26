import { locale_content_type, locale_meta } from "@/public/locales/interface";

export const no_nb = {
	meta: {
		language: {
			code: "no",
			en_name: "Norwegian",
			locale_name: "Norsk",
		},
		region: {
			code: "NB",
			name: "Bokmål",
			display_name: "Bokmål",
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

			continue: "Fortsett",
			confirm: "Bekreft",
			cancel: "Avbryt",
			delete: "Slett",
			remove: "Fjern",
			link: "Link",
			messages: {
				something_went_wrong: "Noe gikk galt",
				email_sent_successfully: "E-post ble sendt suksessfullt",
				error_sending_email: "Feil skjedde ved sending av E-postbekreftelse",
				internal_server_error: "Intern serverfeil",
				invalid_request: "Ugyldig forespørsel",
				invalid_token: "Ugyldig token",
				expired_token: "Utgått token",
				cancelled_successfully: "Avbrut suksessfullt",
			},
		},
		api_responses: {
			user: {
				invalid_form_data: "Ugyldig formdata",
				username_not_available: "Det brukernavnet er ikke tilgjengelig. Prøv noe annet",
				profile_update_success: "Suksessfullt oppdaterte profil",
				something_went_wrong_try_again: "Noe gikk galt! Prøv igjen",
				email_and_pass_required: "E-post og passord kreves",
				no_account_exists_with_that_email: "Det fins ikke en konto med den E-postadressen",
				incorrect_email_or_pass: "Feil E-post eller passord",
				incorrect_password: "Feil passord",
				login_success: "Logget inn suksefult",
				cant_unlink_the_last_auth_provider: "Du kan ikke fjerne den siste gjenværende autentisering-leverandøren",
				successfully_removed_provider: "Suksessfullt fjernet autentiserings-leverandøren ${0}",
				invalid_password: "Ugyldig passord. ${0}",
				successfully_removed_password: "Fjernet passord suksessfullt",
				successfully_added_new_password: "La til nytt passord suksessfullt",
				password_login_not_enabled: "Du kan ikke endre passordet, når du ikke har aktivert innlogging med passord.",
				password_login_not_enabled_desc:
					"Bare kontoer som har et passord tilknyttet som kan endre passordet. Du kan bruke en autentiserings-leverandør for å logge inn hvis du ikke har passord.",
				successfully_deleted_account: "Slettet kontoen din suksessfullt",
				cancelled_account_deletion: "Avbrøt sletting av konto suksessfullt",
			},
		},
		auth: {
			dashboard: "Forside",
			settings: "Innstillinger",
			your_profile: "Profilen din",
			email: "E-post",
			password: "Passord",
			sign_up: "Registrer deg",
			login: "Logg inn",
			sign_out: "Logg ut",
			invalid_session_msg: "Ugyldig lokal økt",
			signing_out: "Logger ut",
			something_went_wrong: "Noe gikk galt",

			login_page: {
				meta_desc: "Logg inn i Cosmic Reach Mod Manager for å få en mer personlig opplevelse.",
				dont_have_an_account: "Har du ikke en konto?",
				forgot_password_msg: "Glemt passordet ditt?",
				log_in_using: "Logg inn med:",
				invalid_email_msg: "Skriv inn en gyldig E-postadresse",
				invalid_password_msg: "Skriv inn et gyldig passord",
			},
			singup_page: {
				meta_desc: "Registrer deg for å ha en konto for å kunne laste opp til Cosmic Reach mod manager",
				signup_using_providers: "Registrer deg ved hjelp av en av de følgende autentiserings-leverandørene",
				already_have_an_account: "Har du allerede en konto?",
			},
			change_password_page: {
				change_password: "Endre passordet",
				meta_desc: "Tilbakestill passordet til kontoen din for Cosmic Reach Mod Manager.",
				email_sent_desc: "Åpne lenken som ble sendt til E-posten din for å endre passordet ditt.",
			},
			action_verification_page: {
				invalid_token: "Utgått eller ugyldig token",
				didnt_request_email: "Ba du ikke om denne E-posten?",
				check_sessions: "Sjekk innloggede økter",
				verify_new_password: "Bekreft ditt nye passord",
				add_new_password_desc:
					"Et nytt passord har nylig blitt lagt til kontoen din. Bekreft nedenfor hvis dette er deg. Det nye passordet vil ikke fungere før da.",
				delete_account: "Slett kontoen din",
				delete_account_desc:
					"Hvis du sletter kontoen din, fjernes alle dataene dine bortsett fra prosjektene dine fra databasen vår. Det er ingen vei tilbake etter at du har slettet kontoen din.",
				enter_password: "Skriv inn ditt nye passord",
				re_enter_password: "Skriv inn passordet på nytt",
				max_password_length_msg: "Passordet ditt kan maksimalt ha ${0} tegn",
				password_dont_match: "Passordene er ikke like",
				cancelled_successfully: "Avbrøt suksessfullt",
				password_changed: "Suksessfullt endret passordet",
				new_password: "Nytt passord",
				confirm_new_password: "Bekreft det nye passordet",
			},
		},
		home_page: {
			hero: {
				description: {
					line_1: "Den beste plassen for dine modifikajsoner for [Cosmic Reach].",
					line_2: "Oppdag, spill, og skap innhold, alt på en plass.",
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
			meta_desc: "Kontoinnstillinger",
			account_section: {
				meta_title: "Kontoinnstillinger",
				account: "Konto",
				user_profile: "Brukerprofil",
				edit: "Rediger",
				edit_profile: "Rediger profil",
				enter_username: "Skriv inn brukernavnet ditt",
				enter_name: "Skriv inn navnet ditt",
				username_max_chars_limit: "Brukernavnet ditt kan bare ha maksimalt ${0} tegn",
				name_max_chars_limit: "Navnet ditt kan bare ha maksimalt ${0} tegn",
				pfp_provider: "Leverandør av profilbilde",
				username: "Brukernavn",
				full_name: "Fult navn",
				save_profile: "Lagre profil",
				account_security: "Kontosikkerhet",
				add_a_password_msg: "Legg til et passord for å kunne bruke påloggingsinformasjon for å logge inn",
				change_account_password: "Endre passordet ditt til kontoen din",
				add_password: "Legg til passord",
				remove_password: "Fjern passord",
				enter_your_password: "Skriv inn passordet ditt",
				remove_account_password: "Fjern passordet til kontoen din",
				manage_auth_providers: "Administrer autentiserings-leverandører",
				manage_auth_providers_desc: "legg til eller fjern metoder for å logge inn til kontoen din.",
				manage_providers_label: "Administrer leverandører",
				provider_email_tooltip: "E-posten til linkede kontoen ${0}",
				auth_providers_label: "Autentiserings-leverandører",
				link_a_provier: "Link leverandøren {0}",
				delete_account: "Slett konto",
				deletion_email_sent_desc:
					"En E-postbekreftelse er sendt til E-postadressen din. Bekreft via E-posten for å slette kontoen din.",
				account_deletion_desc:
					"Det er ingen vei tilbake etter du har slettet kontoen din. Sletting av kontoen din vil fjerne all dataen din fra serveren vår, untatt prosjektene dine.",
				confirm_to_delete_account: "Er du virkelig sikker på at du vil slette kontoen din?",
			},
			sessions_section: {
				sessions: "økter",
				meta_desc: "Administrer innloggede økter",
				view_page: "Vis side",
				sensitive_info_warning: "Advarsel: Sensitiv informasjon",
				session_page_warning_message:
					"Denne siden inneholder sensitiv informasjon som IP-adressen og posisjonen din. Pass på at du ikke sender skjermbilder, opptak eller informasjon fra denne siden til personer du ikke vil skal ha denne informasjonen.",
				page_desc: {
					line_1:
						"Her er alle enhetene som er logget inn i kontoen din akkurat nå. Du kan velge å tvinge dem til å logge ut individuelt her.",
					line_2:
						"Hvis du ser en økt du ikke kjenner igjen, så logg ut av den enheten og endre passordet til kontoen som var logget inn i.",
				},
				current_session: "Nåværende økt",
				timestamp_template: "${day}/${month}/${year} ved ${hours}:${minutes} ${amPm}",
				last_used: "Sist brukt",
				created: "Oppretta",
				time_past_phrases: {
					// should be in lower case, adjust the position of ${0} according to the translation in other languages
					just_now: "akkurat nå",
					minute_ago: "${0} minutt siden",
					minutes_ago: "${0} minutter siden",
					hour_ago: "${0} time siden",
					hours_ago: "${0} timer siden",
					day_ago: "${0} dag siden",
					days_ago: "${0} dager siden",
					week_ago: "${0} uke siden",
					weeks_ago: "${0} uker siden",
					month_ago: "${0} måned siden",
					months_ago: "${0} måneder siden",
					year_ago: "${0} år siden",
					years_ago: "${0} år siden",
				},
				session_created_using_provider: "Denne økten ble opprettet ved hjelp av leverandøreren ${0}.",
				revoke_session: "Opphev økten",
			},
		},

		footer: {
			site_desc: "Modifikasjoner, shaders, ressurspakker, modpakker, og mer for Cosmic reach, alt på ett sted. ",
			socials: "Sosialt",
			explore: "Utforsk",
			privacy_policy: "Retningslinjer for personvern",
			terms: "Vilkår",
			change_theme: "Endre tema",
		},
	} satisfies locale_content_type,
};

import clsx from 'clsx';
import dayjs from 'dayjs';
import i18n from 'i18next';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { fetchUserById } from 'store/User';

import { TextField } from 'components/InputFields/TextField';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useForm } from 'hooks/useForm';

import reactLogo from 'assets/react.svg';

function Home() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const userState = useAppSelector((state) => state.user);

	const UserSchema = Yup.object().shape({
		firstName: Yup.string().required('Firstname is required!'),
		lastName: Yup.string().required('Lastname is required!'),
	});

	console.log('userState', userState);
	console.log('from env file:', import.meta.env.VITE_API_URL);

	const getUser = () => {
		dispatch(fetchUserById(1));
	};

	const formik = useForm({
		schema: UserSchema,
		initialValues: {
			firstName: 'dsa',
			lastName: '',
		},
		onSubmit: async (values, formikHelpers) => {
			console.log(values, formikHelpers);
		},
	});

	const handleFormikChange = (name: string, value: string | number) => {
		formik.setFieldValue(name, value);
		formik.setFieldTouched(name, true);
	};

	useEffect(() => {
		getUser();
	}, []);

	const switchToEng = () => i18n.changeLanguage('en');
	const switchToAl = () => i18n.changeLanguage('sq');

	return (
		<div className={clsx('flex items-center justify-center h-[600px] flex-col gap-12')}>
			<h1>{t('title')}</h1>

			<img src={reactLogo} className="logo react" alt="React logo" />

			<span>
				{t('today_is')} {dayjs().format('DD.MM.YYYY')}
			</span>
			<span>
				{dayjs().add(-3, 'd').format('DD.MM.YYYY')} &gt; {dayjs().add(3, 'd').to(dayjs())}
			</span>

			<div className="flex flex-row gap-14">
				<button onClick={() => switchToAl()}>AL</button>
				<button onClick={() => switchToEng()}>EN</button>
			</div>

			<form className="max-w-[350px] sm:max-w-full " onSubmit={formik.handleSubmit}>
				<p>Form example</p>
				<div className="mb-[24px]">
					<TextField
						id="firstName"
						type="text"
						name="firstName"
						label="First name"
						placeholder="First name"
						value={formik.values.firstName}
						onChange={(name: string, value: string | number) => handleFormikChange(name, value)}
						error={
							formik.touched.firstName && formik.errors.firstName
								? (formik.errors.firstName as string)
								: ''
						}
					/>
				</div>
				<div className="mb-[24px]">
					<TextField
						id="lastName"
						type="text"
						name="lastName"
						label="Last name"
						placeholder="Last name"
						value={formik.values.lastName}
						onChange={(name: string, value: string | number) => handleFormikChange(name, value)}
						error={
							formik.touched.lastName && formik.errors.lastName ? (formik.errors.lastName as string) : ''
						}
					/>
				</div>
				<button color="blue" className="mb-[10px] max-w-[350px] sm:max-w-full sm:w-full xs:px-4" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Home;

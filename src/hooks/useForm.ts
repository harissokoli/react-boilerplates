import { FormikHelpers, useFormik } from 'formik';
import { AnySchema } from 'yup/lib/schema';

interface UseFormOptions {
	initialValues?: any;
	onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void;
	schema: AnySchema;
}

export const useForm = ({ initialValues, onSubmit, schema }: UseFormOptions) => {
	return useFormik({
		initialValues,
		// isInitialValid: true,
		validateOnBlur: false,
		validateOnChange: true,
		validationSchema: schema,
		onSubmit,
	});
};

export type FormikForm = ReturnType<typeof useForm>;

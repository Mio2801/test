const validateForm = (dataForm) => {
	const errors = {};

	if (!dataForm.ten) {
		errors.name = "Trường tên không được bỏ trống.";
	}

	if (!dataForm.ten_khoa_hoc) {
		errors.science_name = "Trường tên khoa học không được bỏ trống.";
	}

	if (!dataForm.kingdom) {
		errors.gioi = "Trường giới không được bỏ trống.";
	}

	if (!dataForm.phylum) {
		errors.nganh = "Trường ngành không được bỏ trống.";
	}

	if (!dataForm.class) {
		errors.lop = "Trường lớp không được bỏ trống.";
	}

	if (!dataForm.order) {
		errors.bo = "Trường bộ không được bỏ trống.";
	}

	if (!dataForm.family) {
		errors.ho = "Trường họ không được bỏ trống.";
	}

	if (!dataForm.genus) {
		errors.chi = "Trường chi không được bỏ trống.";
	}

	return errors;
};


// export const validateFormLogin = (dataForm) => {

// 	const errors = {};

// 	if (!dataForm.username) {
// 		errors.username = "Trường tên đăng nhập không được bỏ trống.";
// 	}

// 	if (!dataForm.password) {
// 		errors.password = "Trường mật khẩu không được bỏ trống.";
// 	} else if (dataForm.password.length < 8) {
// 		errors.password = "Trường mật khẩu phải có tối thiểu 8 ký tự.";
// 	}
// 	return errors;
// }

export default validateForm;

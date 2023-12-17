import { useFormik } from "formik";
import React from "react";
import { ValidationUser } from "../util/ValidationUser";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../Redux/slice/ReducerSlice";

const Form = () => {
  const { showError } = useSelector((state) => state.ReducerSlice);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      maNguoiDung: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    onSubmit: (data, { resetForm }) => {
      dispatch(addUser(data));
      resetForm();
    },
    validationSchema: ValidationUser,
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
  } = formik;
  return (
    <div className="container mx-auto my-5">
      <h1 className="p-4 mb-5 mx-auto w-full text-lg bg-gray-800 text-white">
        Thêm mới sinh viên
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="maNguoiDung"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mã người dùng
            </label>
            <input
              type="text"
              name="maNguoiDung"
              id="maNguoiDung"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Vui lòng nhập mã người dùng"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maNguoiDung}
            />
            {/* dùng toán tử 3 ngôi để kiểm tra khi người dùng click vào input nhập và không tương tác với input đó nữa, nếu có lỗi thì mới thông báo  */}
            {errors.maNguoiDung && touched.maNguoiDung ? (
              <p className="text-red-500 text-xs">{errors.maNguoiDung}</p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="hoTen"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Họ và tên
            </label>
            <input
              type="text"
              name="hoTen"
              id="hoTen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Vui lòng nhập họ tên"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.hoTen}
            />
            {errors.hoTen && touched.hoTen ? (
              <p className="text-red-500 text-xs">{errors.hoTen}</p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Vui lòng nhập email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <p className="text-red-500 text-xs">{errors.email}</p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="soDienThoai"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Số điện thoại
            </label>
            <input
              type="text"
              name="soDienThoai"
              id="soDienThoai"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Vui lòng nhập số điện thoại"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.soDienThoai}
            />
            {errors.soDienThoai && touched.soDienThoai ? (
              <p className="text-red-500 text-xs">{errors.soDienThoai}</p>
            ) : null}
          </div>
          <div>
            <p className="text-xs text-red-500">{}</p>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md mx-3"
            >
              Thêm sinh viên
            </button>
            {/* <button
                type="button"
                className="bg-orange-500 text-white py-2 px-4 rounded-md"
                onClick={() => {
                  dispatch(updateUser(values));
                }}
              >
                Cập nhật sinh viên
              </button> */}
          </div>
        </div>
      </form>

      <Table setValues={setValues} />
    </div>
  );
};

export default Form;

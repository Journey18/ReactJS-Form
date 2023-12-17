import * as Yup from 'yup'

export const ValidationUser = Yup.object({
  maNguoiDung: Yup.string().required("Vui lòng không bỏ trống mã người dùng"),
  hoTen: Yup.string().required("Vui lòng nhập vào họ và tên"),
  email: Yup.string()
    .email("Vui lòng nhập đúng định dạng email")
    .required("Vui lòng không bỏ trống trường này"),
  soDienThoai: Yup.string()
    .matches(
      /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
      "Vui lòng nhập đúng định dạng số điện thoại"
    )
    .required("Vui lòng không bỏ trống trường này"),
})
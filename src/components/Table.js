import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../Redux/slice/ReducerSlice'
import { removeVietnameseCase } from '../util/ValidationSearch'

const Table = ({setValues}) => {
  const {arrUser} = useSelector((state) => state.ReducerSlice)
  const [data,setData] = useState([])
  const dispatch = useDispatch()

  const searchProgress = (keySearch) =>{
    let searchData = arrUser.filter((item) =>{
      return item.hoTen.toLowerCase().includes(keySearch) 
    })
    setData(searchData)
  }

  useEffect(() =>{
    setData(arrUser)
  },[arrUser])

  return (
    <div className="mt-5">
      <h1 className='p-4 mb-5 mx-auto w-full text-lg bg-gray-800 text-white'>Danh sách sinh viên</h1>
      <div className='flex my-2'>
      <input
                type="text"
                name="hoTen"
                id="hoTen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập thông tin tìm kiếm"
                onChange={(event) =>{
                  searchProgress(removeVietnameseCase(event.target.value.toLowerCase()))
                }}
              />
      </div>
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Mã người dùng
            </th>
            <th scope="col" className="px-6 py-3">
              Họ và tên
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Số điện thoại
            </th>
            <th scope="col" className="px-6 py-3">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index) =>{
              const {maNguoiDung,hoTen,email,soDienThoai} = item
              return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {maNguoiDung}
              </th>
              <td className="px-6 py-4">{hoTen}</td>
              <td className="px-6 py-4">{email}</td>
              <td className="px-6 py-4">{soDienThoai}</td>
              <td className="px-6 py-4">
              <button onClick={() =>{
                    dispatch(removeUser(item.maNguoiDung))
                  }} className="p-2 mx-2 text-white bg-red-500 rounded-md">
                    Xoá sinh viên
                  </button>
                  <button onClick={() =>{
                    setValues(item)
                  }} className="p-2 text-white bg-yellow-500 rounded-md">
                    Sửa thông tin
                  </button>
              </td>
            </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Table
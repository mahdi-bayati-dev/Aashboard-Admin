import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { usersPage } from "../../data";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';

function UserList() {
    const [users, setUsers] = useState(usersPage);

    const columns = [
        { 
            field: 'id',
            headerName: 'شناسه',
            width: 90 
        },
        {
            field: 'fullName',
            headerName: 'نام کاربر',
            width: 200,
            renderCell: (params) => (
                <Link className='link' >
                    <div className='userListUser'>
                        <img className='userListImg' src={params.row.avatar} alt={params.row.fullName} />
                        {params.row.fullName}
                    </div>
                </Link>
            )
        },
        {
            field: 'email',
            headerName: 'ایمیل',
            width: 200
        },
        {
            field: 'isActive',
            headerName: 'وضعیت',
            width: 120,
            renderCell: (params) => (
                <span className={params.row.isActive ? 'activeStatus' : 'inactiveStatus'}>
                    {params.row.isActive ? 'فعال' : 'غیرفعال'}
                </span>
            )
        },
        {
            field: 'totalPurchase',
            headerName: 'مجموع خرید',
            width: 160
        },
        {
          field: 'action',
          headerName: 'عملیات',
          width: 150,
          renderCell: (params) => (
              <div className="actionButtons">
                  <Link to={`user/${params.row.id}`}>
                      <button className='userEdit'>ویرایش</button>
                  </Link>
                  <DeleteOutlineIcon 
                      className='userListDelete' 
                      onClick={() => handleDelete(params.row.id)}
                  />
              </div>
          )
      }
  ];

  const handleDelete = (id) => {
      setUsers(users.filter(user => user.id !== id));
  };

  return (
      <div className='userList'  style={{ height: 'calc(100vh - 70px)', width: '100%' }}>
        <DataGrid
    rows={users}
    columns={columns}
    initialState={{
        pagination: {
            paginationModel: { pageSize: 5, page: 0 },
        },
    }}
    pageSizeOptions={[5, 10, 25]}
    checkboxSelection
    disableSelectionOnClick
/>

      </div>
  );
}

export default UserList;


import './product.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { products } from '../../data';

function Product() {
    const [productList, setProductList] = useState(products);

    const columns = [
        { 
            field: 'id',
            headerName: 'شناسه',
            width: 90 
        },
        {
            field: 'name',
            headerName: 'نام محصول',
            width: 200,
            renderCell: (params) => (
                <Link className='link' >
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.image} alt={params.row.name} />
                        {params.row.name}
                    </div>
                </Link>
            )
        },
        {
            field: 'price',
            headerName: 'قیمت',
            width: 160
        },
        {
            field: 'stock',
            headerName: 'موجودی',
            width: 120,
            renderCell: (params) => (
                <span className={params.row.stock ? 'activeStatus' : 'inactiveStatus'}>
                    {params.row.stock ? 'موجود' : 'ناموجود'}
                </span>
            )
        },
        {
            field: 'action',
            headerName: 'عملیات',
            width: 150,
            renderCell: (params) => (
                <div className="actionButtons">
                    <Link to={`/product/${params.row.id}`}>
                        <button className='productEdit'>ویرایش</button>
                    </Link>
                    <DeleteOutlineIcon 
                        className='productListDelete' 
                        onClick={() => handleDelete(params.row.id)}
                    />
                </div>
            )
        }
    ];

    const handleDelete = (id) => {
        setProductList(productList.filter(item => item.id !== id));
    };

    return (
        <div className='productList' style={{ height: 'calc(100vh - 70px)', width: '100%' }}>
            <DataGrid
                rows={productList}
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

export default Product;

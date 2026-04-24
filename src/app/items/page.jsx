import React from 'react'
import { connectMongo } from '../../../lib/mongoConnect'
import Products from '../../../model/products'
import Category from '../../../model/category'
import Sidebar from '../components/sidebar/Sidebar'
import SearchBar from '../components/searchBar/SearchBar'
import MainSale from '../components/Item/MainSale'

const itemsPage = async () => {
    await connectMongo();
    const dataProduct = await Products.find({}).populate('category_id');
    const dataCategory = await Category.find({});
    const productsComplte = await Promise.all(dataProduct.map(async (val) => {
        const imgUrl = `${process.env.API_ENDPOINT}/storage/buckets/${process.env.BUSKET_ID}/files/${val.image_url}/view?project=${process.env.PROJECT_ID}`;

        return { ...val._doc, imgUrl: imgUrl };
    }))
    const products = JSON.parse(JSON.stringify(productsComplte));
    const category = JSON.parse(JSON.stringify(dataCategory));
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
            <div className='p-6'>
                <h1 className="text-3xl font-bold text-gray-800">ขายสินค้า</h1>
            </div>
            <div className='p-5'>
                <SearchBar/>
            </div>
            <MainSale products={products} category={category}/>
        </div>
    </div>
  )
}

export default itemsPage
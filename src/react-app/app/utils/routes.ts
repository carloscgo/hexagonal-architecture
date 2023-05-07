import { BrowserRouter, Routes, Route } from "react-router-dom";

const routes: any = {
    home: '/',
    products: {
        list: '/products',
        new: '/product/new',
        edit: '/product/edit',
        details: '/product/details',
    },
    orders: {
        list: '/orders',
        new: '/order/new',
        edit: '/order/edit',
        details: '/order/details',
    },
}

export default routes;
export { BrowserRouter, Routes, Route };
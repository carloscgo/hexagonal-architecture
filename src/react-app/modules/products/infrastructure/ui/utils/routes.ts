import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const routes = {
    list: '/products',
    new: '/product/new',
    edit: '/product/edit/:idProduct',
    details: '/product/details',
}

export default routes;
export { BrowserRouter, Routes, Route, Link };
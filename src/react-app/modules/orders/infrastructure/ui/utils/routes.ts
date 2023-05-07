import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const routes: any = {
    list: '/',
    new: '/product/new',
    edit: '/product/edit/:idOrder',
    details: '/product/details',
}

export default routes;
export { BrowserRouter, Routes, Route, Link };
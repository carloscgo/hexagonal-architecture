import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const routes: any = {
    list: '/orders',
    new: '/order/new',
    edit: '/order/edit/:idOrder',
    details: '/order/details',
}

export default routes;
export { BrowserRouter, Routes, Route, Link };
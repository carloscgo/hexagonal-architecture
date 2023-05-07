
// modules/products/infrastructure/ui/views/Container.tsx

import ProductsNew from "../components/ProductNew";
import ProductsEdit from "../components/ProductEdit";
import ProductsTable from "../components/ProductsTable";
import routes, { Route, Routes } from "../utils/routes";

const Container = () => {
    return (
        <Routes>
            <Route path={routes.list} element={<ProductsTable />} />
            <Route path={routes.new} element={<ProductsNew />} />
            <Route path={routes.edit} element={<ProductsEdit />} />
        </Routes>
    )
}

export default Container;
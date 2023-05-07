
// modules/products/infrastructure/ui/views/Container.tsx

import ProductsNew from "../components/ProductNew";
import ProductsTable from "../components/ProductsTable";
import routes, { Route, Routes } from "../utils/routes";

const Container = () => {
    return (
        <Routes>
            <Route index path={routes.list} element={<ProductsTable />} />
            <Route path={routes.new} element={<ProductsNew />} />
        </Routes>
    )
}

export default Container;
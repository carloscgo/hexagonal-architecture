
// modules/orders/infrastructure/ui/views/Container.tsx

import OrdersNew from "../components/OrderNew";
import OrdersEdit from "../components/OrderEdit";
import OrdersTable from "../components/OrdersTable";
import routes, { Route, Routes } from "../utils/routes";

const Container = () => {
    return (
        <Routes>
            <Route path={routes.list} element={<OrdersTable />} />
            <Route path={routes.new} element={<OrdersNew />} />
            <Route path={routes.edit} element={<OrdersEdit />} />
        </Routes>
    )
}

export default Container;
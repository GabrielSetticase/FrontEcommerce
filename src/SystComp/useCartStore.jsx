import { create } from "zustand"
import { notification } from "antd"
import { CheckOutlined, ExclamationOutlined } from "@ant-design/icons"


const openAddNotification = (nombre) => notification.open({
    message: "El elemento fue agregado con exito",
    description: nombre, placement: "topLeft",
    icon: <CheckOutlined style={{ color: "green" }} />,
})

const openRemoveNotification = (nombre) => notification.open({
    message: "El elemento fue eliminado con exito",
    description: nombre, placement: "topLeft",
    icon: <ExclamationOutlined style={{ color: "green" }} />,
})

export const useCartStore = create((set) => {
    return {
        productos: [],
        addProduct: (product) =>
            set((state) => {
                openAddNotification(product.nombre)
                return { productos: state.productos.concat(product) }
            }
            ),
        removeProduct: (productNombre) =>
            set((state) => {
                const updatedProducts = state.productos.filter(
                    (product) => product.nombre !== productNombre
                )
                openRemoveNotification(productNombre.nombre)
                return { productos: updatedProducts }
            })
    }
}
)

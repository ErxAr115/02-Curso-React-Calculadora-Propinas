import { useCallback } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

interface OrderTotalsProps {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black">Totales y Propina:</h2>
            <p>Subtotal a pagar: {''}<span className="font-black">{formatCurrency(subtotalAmount())}</span></p>

            <p>Propina: {''}<span className="font-black">{formatCurrency(tipAmount())}</span></p>

            <p>Total a pagar: {''}<span className="font-black">{formatCurrency(totalAmount())}</span></p>
        </div>

        <button 
          className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
          disabled={totalAmount() === 0} onClick={placeOrder} id="delete">
          Guardar Orden
        </button>
    </>
  )
}

export default OrderTotals
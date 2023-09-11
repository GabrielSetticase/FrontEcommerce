import React, { useState } from 'react'
import { Principal } from './Principal'
import { DetalleCompra } from './DetalleCompra'

export const SystComp = ({ loguear, isAdmin }) => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <>
            {
                showDetail ?
                    <DetalleCompra
                        setShowDetail={setShowDetail}
                    /> :
                    <Principal
                        setShowDetail={setShowDetail}
                        loguear={loguear}
                        isAdmin={isAdmin}
                    />
            }
        </>
    )
}

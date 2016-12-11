/**
 * Created by asolorzano on 11/12/16.
 */

export const CAMBIARAPP = 'CAMBIARAPP'

export const dispatchcambiar = (estado)=>{
    return {
        type: CAMBIARAPP, payload: {
            logout: estado
        }
    }
}

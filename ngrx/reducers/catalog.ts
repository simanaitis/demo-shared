
import * as CatalogActions from '../actions/catalog';
import { IProduct } from "../../models/product";

export interface State {
    loaded: boolean;
    products: IProduct[];
}

const initialState: State = {
    loaded: false,
    products: []
};

export function reducer ( state = initialState, action: CatalogActions.All ): State {
    switch ( action.type ) {
        case CatalogActions.LOAD_PRODUCTS: {
            return state;
        }

        case CatalogActions.LOAD_PRODUCTS_SUCCESS: {
            return {
                loaded: true,
                products: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
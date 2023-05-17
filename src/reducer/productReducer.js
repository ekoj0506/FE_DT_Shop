export const productReducer = (state, action) => {
    switch(action.type) {
        case 'products_loading':
            return {...state, isProductLoading: action.payload};
        case 'categories_loading':
            return {...state, isCategoryLoading: action.payload};
        case 'set_products':
            return {...state, productData: action.payload};
        case 'set_product':
            return {...state, product: action.payload};

        case 'set_category':
            return {...state, categoriesData: action.payload}
        default:
            return state
    }
}
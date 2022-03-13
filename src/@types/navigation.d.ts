export type ProducNavigationProps = {
    id?: string;
}

export type OrderNavigationProps = {
    id: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            product: ProducNavigationProps;
            order: OrderNavigationProps;
            orders: undefined;
        }
    }
}
export default {
    namespaced: true,
    state: {
        suppliers: [
            {
                id: 1,
                title: 'Supplier 1',
                imgSrc: 'https://w7.pngwing.com/pngs/464/355/png-transparent-noname-logo.png',
                logo: [
                    'https://cdn-icons-png.flaticon.com/128/45/45896.png',
                    'https://cdn-icons-png.flaticon.com/128/3202/3202926.png',
                ],
            },
            {
                id: 2,
                title: 'Supplier 2',
                imgSrc: 'https://i1.sndcdn.com/artworks-000465966324-fk841c-t500x500.jpg',
                logo: ['https://cdn-icons-png.flaticon.com/128/3202/3202926.png'],
            },
            {
                id: 3,
                title: 'Supplier 3',
                imgSrc: 'https://www.virtualproleague.com/portal/assets/images/escudos/escudo_time_42202_1666293686.png',
                logo: [
                    'https://cdn-icons-png.flaticon.com/128/45/45896.png',
                    'https://cdn-icons-png.flaticon.com/128/3202/3202926.png',
                ],
            },
            {
                id: 4,
                title: 'Supplier 4',
                imgSrc: 'https://noname.moda/wp-content/uploads/2021/11/NONAME-logo-kwadrat-v1.png',
                logo: ['https://cdn-icons-png.flaticon.com/128/3202/3202926.png'],
            },
        ],
    },
    getters: {
        supliersList: ({ suppliers }) => suppliers,
    },
    mutations: {},
    actions: {},
    modules: {},
}

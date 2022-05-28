const app = Vue.createApp({
     data() {
          return {
               product: 'Socks',
               image: './assets/images/socks_green.jpg',
               inStock: true,
               inventory: 100,
               style:{many:'many',some:'some',none:'none'},
               onSale: false,
               details: ['70% cotton', '10% polyester', '20% wool'],
               variants:[
                    { id: 1234, color:'green' },
                    { id: 1235, color:'blue' }
               ],
               sizes: ['S', 'M', 'L', 'XL'],
          }
     }
 })
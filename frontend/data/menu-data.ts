import { type IMenuItem, type IMobileType } from "@/types/menu-d-type";

export const menu_data:IMenuItem[] = [
  {
    id:1,
    link:'/',
    title:'Home',
    mega_menu:true,
    home_pages:[
      {
        id:1,
        title:'Electronics',
        img:'/img/menu/menu-home-1.jpg',
        link:'/'
      },
      {
        id:2,
        title:'Fashion',
        img:'/img/menu/menu-home-2.jpg',
        link:'/home-2'
      },
      {
        id:3,
        title:'Beauty',
        img:'/img/menu/menu-home-3.jpg',
        link:'/home-3'
      },
      {
        id:4,
        title:'Electronics',
        img:'/img/menu/menu-home-4.jpg',
        link:'/home-4'
      },
    ]
  },
  {
    id:2,
    link:'/shop',
    title:'Shop',
    mega_menu:true,
    shop_mega_menus:[
      {
        link:'/shop',
        title:'Shop Pages',
        list_menus:[
          {title:'Grid Layout',link:'/shop'},
          {title:'Shop Categories',link:'/shop-categories'},
          {title:'List Layout',link:'/shop-list'},
          {title:'Full width Layout',link:'/shop-full-width'},
          {title:'1600px Layout',link:'/shop-1600'},
          {title:'Left Sidebar',link:'/shop'},
          {title:'Right Sidebar',link:'/shop-right-sidebar'},
          {title:'Hidden Sidebar',link:'/shop-no-sidebar'},
        ]
      },
      {
        link:'/shop',
        title:'Features',
        list_menus:[
          {title:'Filter Dropdown',link:'/shop-filter-dropdown'},
          {title:'Filters Offcanvas',link:'/shop-filter-offcanvas'},
          {title:'Filters Sidebar',link:'/shop'},
          {title:'Load More button',link:'/shop-load-more'},
          {title:'1600px Layout',link:'/shop-1600'},
          {title:'Collections list',link:'/shop-list'},
          {title:'Hidden search',link:'/shop'},
          {title:'Search Full screen',link:'/shop'},
        ]
      },
      {
        link:'/shop',
        title:'Hover Style',
        list_menus:[
          {title:'Hover Style 1',link:'/shop'},
          {title:'Hover Style 2',link:'/shop'},
          {title:'Hover Style 3',link:'/shop'},
          {title:'Hover Style 4',link:'/shop'}
        ]
      },
    ]
  },
  {
    id:3,
    link:'/shop',
    title:'Products',
    mega_menu:true,
    product_menus:[
      {
        id:1,
        title:'Shop Page',
        link:'/shop',
        dropdown_menus:[
          {title:'Only Categories',link:'/shop-categories'},
          {title:'Shop Grid with Sidebar',link:'/shop-filter-offcanvas'},
          {title:'Shop Grid',link:'/shop'},
          {title:'Categories',link:'/shop-categories'},
          {title:'Shop List',link:'/shop-list'},
          {title:'Product Details',link:'/product-details'},
        ]
      },
      {
        id:2,
        title:'Products',
        link:'/shop',
        dropdown_menus:[
          {title:'Product Simple',link:'/product-details'},
          {title:'With Video',link:'/product-details-video'},
          {title:'With Countdown Timer',link:'/product-details-countdown'},
          {title:'Variations Swatches',link:'/product-details-swatches'},
          {title:'List View',link:'/product-details-list'},
          {title:'Details Gallery',link:'/product-details-gallery'},
          {title:'With Slider',link:'/product-details-slider'},
        ]
      },
      {
        id:3,
        title:'eCommerce',
        link:'/shop',
        dropdown_menus:[
          {title:'Shopping Cart',link:'/cart'},
          {title:'Track Your Order',link:'/order'},
          {title:'Compare',link:'/compare'},
          {title:'Wishlist',link:'/wishlist'},
          {title:'Checkout',link:'/checkout'},
          {title:'My account',link:'/profile'}
        ]
      },
      {
        id:4,
        title:'More Pages',
        link:'/shop',
        dropdown_menus:[
          {title:'About',link:'/about'},
          {title:'Login',link:'/login'},
          {title:'Register',link:'/register'},
          {title:'Forgot Password',link:'/forgot'},
          {title:'404 Error',link:'/404'}
        ]
      },
    ]
  },
  {
    id:4,
    link:'/coupons',
    title:'Coupons',
  },
  {
    id:5,
    link:'/blog',
    title:'Blog',
    drop_down:true,
    dropdown_menus:[
      {title:'Blog Standard',link:'/blog'},
      {title:'Blog Grid',link:'/blog-grid'},
      {title:'Blog List',link:'/blog-list'},
      {title:'Blog Details Full Width',link:'/blog-details-2'},
      {title:'Blog Details',link:'/blog-details'},
    ]
  },
  {
    id:5,
    link:'/contact',
    title:'Contact',
  },
]

// mobile menu data 
export const mobile_menu:IMobileType[] = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    home_pages: [
      {
        id:1,
        title:'Electronics',
        img:'/img/menu/menu-home-1.jpg',
        link:'/'
      },
      {
        id:2,
        title:'Fashion',
        img:'/img/menu/menu-home-2.jpg',
        link:'/home-2'
      },
      {
        id:3,
        title:'Beauty',
        img:'/img/menu/menu-home-3.jpg',
        link:'/home-3'
      },
      {
        id:4,
        title:'Electronics',
        img:'/img/menu/menu-home-4.jpg',
        link:'/home-4'
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Products',
    link: '/shop',
    sub_menus: [
      { title: 'Shop', link: '/shop' },
      { title: 'Shop Full Width', link: '/shop-full-width' },
      { title: 'shop-1600', link: '/shop-1600' },
      { title: 'Shop Right Sidebar', link: '/shop-right-sidebar' },
      { title: 'Shop No Sidebar', link: '/shop-no-sidebar' },
      { title: 'Shop Filter Dropdown', link: '/shop-filter-dropdown' },
      { title: 'Shop Filter Offcanvas', link: '/shop-filter-offcanvas' },
      { title: 'Shop Load More', link: '/shop-load-more' },
      { title: 'Shop List', link: '/shop-list' },
      { title: 'Only Categories', link: '/shop-categories' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Products Details',
    link: '/product-details',
    sub_menus: [
      { title: 'Product Details', link: '/product-details'},
      { title: 'With Video', link: '/product-details-video'},
      { title: 'With Countdown', link: '/product-details-countdown'},
      { title: 'Variations Swatches', link: '/product-details-swatches'},
      { title: 'Details List', link: '/product-details-list'},
      { title: 'Details Gallery', link: '/product-details-gallery'},
      { title: 'Details Slider', link: '/product-details-slider'},
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'eCommerce',
    link: '/cart',
    sub_menus: [
      { title: 'Shopping Cart', link: '/cart' },
      { title: 'Compare', link: '/compare' },
      { title: 'Wishlist', link: '/wishlist' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'My account', link: '/profile' },
    ],
  },
  {
    id: 5,
    sub_menu: true,
    title: 'More Pages',
    link: '/login',
    sub_menus: [
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: '404 Error', link: '/404' },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: 'Coupons',
    link: '/coupons',
  },
  {
    id: 7,
    sub_menu: true,
    title: 'Blog',
    link: '/blog',
    sub_menus: [
      { title: 'Blog Standard', link: '/blog' },
      { title: 'Blog Grid', link: '/blog-grid' },
      { title: 'Blog List', link: '/blog-list' },
      { title: 'Blog Details', link: '/blog-details' },
      { title: 'Blog Details Full Width', link: '/blog-details-2' },
    ]
  },
  {
    id: 8,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]
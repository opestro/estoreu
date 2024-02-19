import { ref, onMounted } from "vue";
import { IProduct } from "types/product-type";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";

export const useCartStore = defineStore("cart_product", () => {
  const route = useRoute();
  let cart_products = ref<IProduct[]>([]);
  let orderQuantity = ref<number>(1);
  let cartOffcanvas = ref<boolean>(false);

  // add_cart_product
  const addCartProduct = (payload: IProduct) => {
    const isExist = cart_products.value.some((i) => i.id === payload.id);
    if(payload.status === 'out-of-stock'){
      toast.error(`Out of stock ${payload.title}`);
    }
    else if (!isExist) {
      const newItem = {
        ...payload,
        orderQuantity: 1,
      };
      cart_products.value.push(newItem);
      toast.success(`${payload.title} added to cart`);
    } else {
      cart_products.value.map((item) => {
        if (item.id === payload.id) {
          if (typeof item.orderQuantity !== "undefined") {
            if (item.quantity >= item.orderQuantity + orderQuantity.value) {
              item.orderQuantity =
                orderQuantity.value !== 1
                  ? orderQuantity.value + item.orderQuantity
                  : item.orderQuantity + 1;
              toast.success(
                `${orderQuantity.value} ${item.title} added to cart`
              );
            } else {
              toast.error(`No more quantity available for this product!`);
              orderQuantity.value = 1;
            }
          }
        }
        return { ...item };
      });
    }
    localStorage.setItem("cart_products", JSON.stringify(cart_products.value));
  };

  // quantity increment
  const increment = () => {
   return orderQuantity.value = orderQuantity.value + 1;
  }

  // quantity decrement
  const decrement = () => {
   return orderQuantity.value =
      orderQuantity.value > 1
        ? orderQuantity.value - 1
        : (orderQuantity.value = 1);
  }

  // quantityDecrement
  const quantityDecrement = (payload: IProduct) => {
    cart_products.value.map((item) => {
      if (item.id === payload.id) {
        if (typeof item.orderQuantity !== "undefined") {
          if (item.orderQuantity > 1) {
            item.orderQuantity = item.orderQuantity - 1;
            toast.info(`Decrement Quantity For ${item.title}`);
          }
        }
      }
      return { ...item };
    });
    localStorage.setItem("cart_products", JSON.stringify(cart_products.value));
  };

  // remover_cart_products
  const removeCartProduct = (payload: IProduct) => {
    cart_products.value = cart_products.value.filter(
      (p) => p.id !== payload.id
    );
    toast.error(`${payload.title} remove to cart`);
    localStorage.setItem("cart_products", JSON.stringify(cart_products.value));
  };

  // cart product initialize
  const initializeCartProducts = () => {
    const cartData = localStorage.getItem("cart_products");
    if (cartData) {
      cart_products.value = JSON.parse(cartData);
    }
  };

  // clear cart
  const clear_cart = () => {
    const confirmMsg = window.confirm(
      "Are you sure deleted your all cart items ?"
    );
    if (confirmMsg) {
      cart_products.value = [];
    }
    localStorage.setItem("cart_products", JSON.stringify(cart_products.value));
  };
  // initialOrderQuantity
  const initialOrderQuantity = () => {
   return orderQuantity.value = 1;
  };

  // totalPriceQuantity
  const totalPriceQuantity = computed(() => {
    return cart_products.value.reduce(
      (cartTotal, cartItem) => {
        const { price, orderQuantity } = cartItem;
        if (typeof orderQuantity !== "undefined") {
          const itemTotal = price * orderQuantity;
          cartTotal.quantity += orderQuantity;
          cartTotal.total += itemTotal;
        }
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
  });

  //handle cartOffcanvas
  const handleCartOffcanvas = () => {
    cartOffcanvas.value = !cartOffcanvas.value
  }

  // set local storage product when project are mounted
  onMounted(() => {
    initializeCartProducts();
  });


  // when router change than order quantity will be 1
  watch(() => route.path, () => {
    orderQuantity.value = 1
  })
  return {
    addCartProduct,
    cart_products,
    quantityDecrement,
    removeCartProduct,
    clear_cart,
    initialOrderQuantity,
    totalPriceQuantity,
    handleCartOffcanvas,
    cartOffcanvas,
    orderQuantity,
    increment,
    decrement,
  };
});

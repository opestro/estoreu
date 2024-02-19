 <template>
   <section class="tp-compare-area pb-120">
      <div class="container">
        <div v-if="compareStore.compare_items.length === 0" className='text-center pt-50'>
          <h3>No Compare Items Found</h3>
          <nuxt-link href="/shop" className="tp-cart-checkout-btn mt-20">Continue Shipping</nuxt-link>
        </div>
          <div v-else class="row">
              <div class="col-xl-12">
                  <div class="tp-compare-table table-responsive text-center">
                      <table class="table">
                          <tbody>
                            <tr>
                              <th>Product</th>
                              <td v-for="item in compareStore.compare_items" :key="item.id">
                                  <div class="tp-compare-thumb">
                                      <img :src="item.img" alt="product">
                                      <h4 class="tp-compare-product-title">
                                          <nuxt-link :href="`/product-details/${item.id}`">{{ item.title }}</nuxt-link>
                                      </h4>
                                  </div>
                              </td>
                            </tr>

                            <tr>
                              <th>Description</th>
                              <td v-for="item in compareStore.compare_items" :key="item.id">
                                  <div class="tp-compare-desc">
                                      <p>{{item.description.substring(0,150)}}</p>
                                  </div>
                              </td>
                            </tr>

                            <tr>
                              <th>Price</th>
                              <td v-for="item in compareStore.compare_items" :key="item.id">
                                  <div class="tp-compare-price" v-if="item.discount > 0">
                                      <span>${{ item.price.toFixed(2) }}</span>
                                      <span class="old-price">${{(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100).toFixed(2)}}</span>
                                  </div>
                                  <div class="tp-compare-price" v-else>
                                      <span>${{ item.price.toFixed(2) }}</span>
                                  </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <th>Add to cart</th>
                              <td v-for="item in compareStore.compare_items" :key="item.id">
                                  <div class="tp-compare-add-to-cart">
                                      <button @click="cartStore.addCartProduct(item)" type="button" class="tp-btn">Add to Cart</button>
                                  </div>
                              </td>
                            </tr>

                            <tr>
                              <th>Rating</th>
                              <td v-for="item in compareStore.compare_items" :key="item.id">
                                  <div class="tp-compare-rating">
                                      <span><i class="fas fa-star"></i></span>
                                      <span><i class="fas fa-star"></i></span>
                                      <span><i class="fas fa-star"></i></span>
                                      <span><i class="fas fa-star"></i></span>
                                      <span><i class="fas fa-star"></i></span>
                                  </div>
                              </td>
                            </tr>

                            <tr>
                              <th>Remove</th>
                              <td v-for="item in compareStore.compare_items" :key="item.id">
                                  <div class="tp-compare-remove">
                                      <button @click="compareStore.removeCompare(item)"><i class="fal fa-trash-alt"></i></button>
                                  </div>
                              </td>

                            </tr>
                          </tbody>
                        </table>
                  </div>
              </div>
          </div>
      </div>
  </section>
 </template>
 
 <script setup lang="ts">
 import { useCompareStore } from "@/pinia/useCompareStore";
 import { useCartStore } from "@/pinia/useCartStore";
 const compareStore = useCompareStore();
 const cartStore = useCartStore();
 </script>
 
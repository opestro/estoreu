<template>
  <div class="tp-product-details-tab-nav tp-tab">
    <nav>
      <div class="nav nav-tabs justify-content-center p-relative tp-product-tab" id="navPresentationTab" role="tablist">
        <button @click="handleActiveMarker($event)" class="nav-link" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</button>

        <button @click="handleActiveMarker($event)" class="nav-link active" id="nav-addInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-addInfo" type="button" role="tab" aria-controls="nav-addInfo" aria-selected="false">Additional information</button>

        <button @click="handleActiveMarker($event)" class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews ({{product.reviews?.length}})</button>
        <span id="productTabMarker" class="tp-product-details-tab-line"></span>
      </div>
    </nav>  
    <div class="tab-content" id="navPresentationTabContent">
      <div class="tab-pane fade" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab" tabindex="0">
          <div class="tp-product-details-desc-wrapper pt-80">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                  <div class="tp-product-details-desc-item pb-105">
                      <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-product-details-desc-content pt-25">
                              <span>{{product.category.name}}</span>
                              <h3 class="tp-product-details-desc-title">{{product.title}}</h3>
                              <p>{{ product.description }}</p>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div class="tab-pane fade show active" id="nav-addInfo" role="tabpanel" aria-labelledby="nav-addInfo-tab" tabindex="0">
          <div class="tp-product-details-additional-info ">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                  <table>
                      <tbody>
                        <tr v-for="(info,i) in product.additionalInformation" :key="i">
                            <td>{{info.key}}</td>
                            <td>{{info.value}}</td>
                        </tr>
                      </tbody>
                  </table>
                </div>
            </div>
          </div>
      </div>
      <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabindex="0">
          <div class="tp-product-details-review-wrapper pt-60">
            <div class="row">
                <div class="col-lg-6">
                  <div class="tp-product-details-review-statics">
                      <!-- number -->
                      <div class="tp-product-details-review-number d-inline-block mb-50">
                        <h3 class="tp-product-details-review-number-title">Customer reviews</h3>
                        <div class="tp-product-details-review-summery d-flex align-items-center">
                            <div class="tp-product-details-review-summery-value">
                              <span>4.5</span>
                            </div>
                            <div class="tp-product-details-review-summery-rating d-flex align-items-center">
                              <span><i class="fa-solid fa-star"></i></span>
                              <span><i class="fa-solid fa-star"></i></span>
                              <span><i class="fa-solid fa-star"></i></span>
                              <span><i class="fa-solid fa-star"></i></span>
                              <span><i class="fa-solid fa-star"></i></span>
                              <p>({{product.reviews?.length}} Reviews)</p>
                            </div>
                        </div>
                        <div class="tp-product-details-review-rating-list">
                            <!-- rating item -->
                            <product-details-rating-item :star="5" width="82" /> 
                            <product-details-rating-item :star="4" width="30" /> 
                            <product-details-rating-item :star="3" width="15" /> 
                            <product-details-rating-item :star="2" width="6" /> 
                            <product-details-rating-item :star="1" width="10" /> 
                            <!-- end rating item -->
                        </div>
                      </div>

                      <!-- reviews -->
                      <div class="tp-product-details-review-list pr-110">
                        <h3 class="tp-product-details-review-title">Rating & Review</h3>
                        <div v-if="product.reviews && product.reviews.length > 0">
                          <div v-for="(item,i) in product.reviews" :key="i" class="tp-product-details-review-avater d-flex align-items-start">
                              <div class="tp-product-details-review-avater-thumb">
                                <a href="#">
                                    <img :src="item.user" alt="user">
                                </a>
                              </div>
                              <div class="tp-product-details-review-avater-content">
                                <div class="tp-product-details-review-avater-rating d-flex align-items-center">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <h3 class="tp-product-details-review-avater-title">{{item.name}}</h3>
                                <span class="tp-product-details-review-avater-meta">{{item.date}} </span>
  
                                <div class="tp-product-details-review-avater-comment">
                                    <p>{{item.review}}</p>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div v-else>
                          <h5>No Reviews Found</h5>
                        </div>
                      </div>
                  </div>
                </div> <!-- end col -->
                <div class="col-lg-6">
                  <div class="tp-product-details-review-form">
                      <h3 class="tp-product-details-review-form-title">Review this product</h3>
                      <p>Your email address will not be published. Required fields are marked *</p>
                     <!-- form start -->
                     <forms-review-form/>
                     <!-- form end -->
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>                                                
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from '@/types/product-type';
// handleActiveMarker
const handleActiveMarker = (event: MouseEvent) => {
  const marker = document.getElementById("productTabMarker");
  if (marker && event.target) {
    marker.style.left = (event.target as HTMLButtonElement).offsetLeft + "px";
    marker.style.width = (event.target as HTMLButtonElement).offsetWidth + "px";
  }
};

 defineProps<{product:IProduct}>();

onMounted(() => {
  const nav_active = document.getElementById("nav-addInfo-tab");
  const marker = document.getElementById("productTabMarker");
  if (nav_active?.classList.contains("active") && marker) {
    marker.style.left = nav_active.offsetLeft + "px";
    marker.style.width = nav_active.offsetWidth + "px";
  }
});
</script>

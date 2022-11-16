 <script setup>
 import axios from 'axios'
</script>
 <template>
    <div>
        
        <main>
<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div v-for="item in products " :key="item.id" class="col">
        <div class="card shadow-sm">
       <img :src="item.image" alt="" class="img-fluid custom-img">

          <div class="card-body">
            <p class="card-text">{{item.title}}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button  type="button" class="btn btn-sm btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="send(item.id)">View</button>
             
              </div>
              <small class="text-muted">{{item.price}}$</small>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</div>

</main> 


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <p><strong>description:</strong> {{desc.description}}</p>
       <p> <strong>count:</strong>{{desc.rating.count}}</p>
       <div class="d-flex">
       
        <i v-for="star in Math.round(desc.rating.rate) " :key="star" class="fa-solid fa-star"></i>  
        <i v-if="desc.rating.rate!=Math.round(desc.rating.rate)" class="fa-solid fa-star-half"></i>
        
      </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>


<script>
export default {
  data(){
   return{
    desc:{}
   } 
  } , 
    props:{
    products:{
        type: Array
    }

    },
    methods:{
        send(id){
            this.axios.get('https://fakestoreapi.com/products/' + id).then(({data}) =>{
               this.desc=data
          })
        }
    },
    
  
}
</script>

<style>

.custom-img{
    width: 360px;
    height:470px ;
    object-fit:cover ;
}
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
    </style>
<template>
  <v-app id="haritGriha">

    <!-- <v-toolbar class="navBar" :fixed="navHeader">
      
      <span>Harit</span>
      <span class="font-weight-light">Griha</span>

      <v-spacer></v-spacer>

      <v-btn class="hidden-sm-and-down" round color="primary">
        <span>Donate</span>
      </v-btn>
      
      <v-btn class="hidden-sm-and-down" round color="primary">
        <span>Volunteer</span>
      </v-btn>

      <v-btn class="hidden-md-and-up ma-2" @click.stop="drawer = !drawer" fab flat>
        <v-icon dark>menu</v-icon>
      </v-btn>
    </v-toolbar> -->
      <scrollactive class="my-nav" active-class="haritGriha" :duration="800">
        <nav id="navBar" class="hidden-sm-and-down navbar-transparent">
          <v-container grid-list-xs class="pa-0 fill-height">
            <v-layout class="fill-height" row>
              <div class="logo mx-3 my-auto headline">
                <a href="#haritGriha" class="scrollactive-item">
                  <span class="font-weight-bold">Harit</span>
                  <span class="title font-weight-medium">Griha</span>
                </a>
              </div>

              <div class=" navbar-list body-1 mx-3 my-auto">
                <a href="#whoAreWe" class="scrollactive-item pa-4 font-weight-medium body-1">Who Are We</a>
                <a href="#whySustainableLiving" class="scrollactive-item pa-4 font-weight-medium body-1">Why sustainable living</a>
                <a href="#ourApproch" class="scrollactive-item pa-4 font-weight-medium body-1">Our Approch</a>
                <a href="#gallery" class="scrollactive-item pa-4 font-weight-medium body-1">Gallery</a>
                <a href="#blog" class="scrollactive-item pa-4 font-weight-medium body-1">Blog</a>
                <a href="#ourTeam" class="scrollactive-item pa-4 font-weight-medium body-1">Our Team</a>
              </div>
            </v-layout>
          </v-container>
        </nav>
      </scrollactive>

    <v-content>

      <!-- <div class="hidden-sm-and-down" style="padding-top: 130px;"></div>
      <div class="hidden-md-and-up" style="padding-top: 110px;"></div> -->
      
      <!-- <section> -->
        <!-- <v-parallax class="header-image" :src="require('./assets/img/hanan-1399891-unsplash.jpg')">
          <v-layout align-center column justify-center>
            <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
            <h4 class="subheading">Build your application today!</h4>
          </v-layout>
        </v-parallax> -->
      <!-- </section> -->

      <!-- Header Image -->
      <div class="header-image fill-height">
        <v-img class="fill-height" :lazy-src="require('./assets/img/photo-1485841938031-1bf81239b815.jpeg')" :src="require('./assets/img/photo-1485841938031-1bf81239b815.jpeg')" gradient="to top right, rgb(0, 0, 0, .3), rgb(0, 0, 0, .6)">
          <v-container fill-height grid-list-md pa-0>
            <v-layout data-aos="fade" data-aos-delay="400" align-center column justify-center :class="{'ma-0': $vuetify.breakpoint.smAndDown, 'ma-5': $vuetify.breakpoint.mdAndUp}">
              <div :class="{'ma-0': $vuetify.breakpoint.smAndDown, 'ma-5': $vuetify.breakpoint.mdAndUp}">
                <h1 class="display-3 font-weight-light white--text text-xs-center">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
              </div>
              <!-- <h4 class="subheading white--text">Build your application today!</h4> -->
            </v-layout>
          </v-container>
        </v-img>
      </div>

      <!-- Who Are We -->
      <section id="whoAreWe">
        <v-container grid-list-xs fill-height>
          <v-layout align-center justify-space-between row fill-height :class="{'wrap': $vuetify.breakpoint.smAndDown, '': $vuetify.breakpoint.mdAndUp}">
            <v-flex md6 xs12>
              <!-- <v-card height="340" color="rgb(0, 230, 118, 0.5)" hover flat> -->
              <v-card height="340" color="#fafafa" flat>
                <v-card-title class="fill-height" primary-title>
                  <div class="text-xs-center text-sm-left pa-4">
                    <h1 class="display-1 font-weight-light">Served Over</h1>
                    <h1 v-if="!insideWhoAreWeSection" class="display-3 font-weight-medium primary--text">1,321,901</h1>
                      <animated-number v-else class="display-3 font-weight-medium primary--text" :value="number" :formatValue="formatToPrice" :duration="5000"/>
                    <h1 class="display-1 font-weight-light">Children in 150 Countries</h1>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex md6 xs12 ml-5>
              <h1 class="display-2 font-weight-medium text-xs-center text-sm-left pb-3">Who Are We?</h1>
              <h1 class="font-weight-light text-xs-center text-sm-left">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>

              <p class="text-xs-center text-sm-left font-weight-light pt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section class="primary lighten-2 white--text">
        <v-container grid-list-xs>
          <v-layout row wrap>
            <h1 class="display-1 mx-5 text-xs-center font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut necessitatibus repellat excepturi aspernatur voluptate deleniti ad temporibus quae</h1>
          </v-layout>
        </v-container>
      </section>

      <!-- Why sustainable living? -->
      <section id="whySustainableLiving">
        <v-container grid-list-xs fill-height>
          <v-layout align-center justify-space-between row fill-height :class="{'wrap': $vuetify.breakpoint.smAndDown, '': $vuetify.breakpoint.mdAndUp}">
            <v-flex xs12 md6>
              <h1 class="display-2 font-weight-medium text-xs-right pb-2">Why sustainable living?</h1>
              <h1 class="font-weight-light text-xs-right">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>

              <p class="text-xs-right font-weight-light pt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            </v-flex>
            <v-flex xs12 md6 ml-5>
              <!-- <v-card height="340" color="rgb(0, 230, 118, 0.5)" hover flat> -->
              <v-card height="340" class="elevation-20">
                <v-img height="340" :src="require('./assets/img/noah-buscher-1162202-unsplash.jpg')">
                </v-img>
                <!-- <v-card-title class="fill-height" primary-title>
                  <div class="text-xs-left pa-4">
                    <h1 class="display-1 font-weight-light">Served Over</h1>
                    <h1 class="display-3 font-weight-medium">1,321,901</h1>
                    <h1 class="display-1 font-weight-light">Children in 150 Countries</h1>
                  </div>
                </v-card-title> -->
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        
      </section>

      <!-- Our Approch -->
      <section id="ourApproch">
        <v-container class="px-0" grid-list-xs fill-height>
          <v-layout align-content-start row wrap fill-height>
          <v-flex xs12 mb-5>
            <h1 class="display-2 font-weight-medium d-flex justify-center">Our Approch</h1>
          </v-flex>
            <v-flex xs12 md4 v-for="(i, index) in 5" :key="i">
              <v-card data-aos="fade-up" :data-aos-delay="300 + (index*100)" class="pa-5 fill-height d-flex align-baseline justify-start" flat>
                <!-- <div class="text-xs-center pb-3">
                </div> -->
                <!-- <v-card-title class="d-flex align-baseline" primary-title > -->
                  <v-flex xs2 mr-4>
                    <v-icon color="primary" size="45">{{ourApproach.icons[index]}}</v-icon>
                  </v-flex>
                  <v-flex class="align-self-start" xs10>
                    <div class="text-xs-left">
                      <h1 class="font-weight-light primary--text headline pb-1">{{ourApproach.headings[index]}}</h1>
                      <p class="font-weight-light mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.
                      </p>
                    </div>
                  </v-flex>
                <!-- </v-card-title> -->
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>



      <section id="gallery" class="carousel-section pb-0">

        <v-flex xs12 mb-5>
          <h1 class="display-2 font-weight-medium d-flex justify-center">Gallery</h1>
        </v-flex>
        <v-flex xs12>
          <v-carousel hide-delimiters height="600">
            <v-carousel-item
              v-for="(item,i) in c_items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>          
        </v-flex>
      </section>

      <section class="success-stories">
        <div class="overlay-1 fill-height">
          <v-container grid-list-xs fill-height>
            <v-layout align-center justify-space-between row fill-height>
              <v-flex md6 data-aos="fade-up">
                <!-- <v-card height="340" color="rgb(0, 230, 118, 0.5)" hover flat> -->
                <v-card class="card elevation-15" height="340" color="#fafafa" flat>
                  <v-img height="340" :src="require('./assets/img/bg_3.jpg')">
                  </v-img>
                </v-card>
              </v-flex>
              <v-flex md6 ml-5 data-aos="fade-up" data-aos-delay="300">
                <p class="title white--text success-p pb-1">Success Stories</p>
                <h1 class="headline font-weight-medium text-xs-left white--text">Water Is Life. We Successfuly Provide Clean Water in South East Asia</h1>
                <p class="subheading font-weight-light white--text text-xs-left pt-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                <v-btn color="#f7ca44" class="button mx-0 my-3 elevation-15" depressed>Read The Full Story</v-btn>

              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </section>

      <section id="blog">
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12 mb-5>
              <h1 class="display-2 font-weight-medium text-xs-center">Latest News</h1>
            </v-flex>
            <v-flex xs12 d-flex>
              
              <v-flex class="" xs4 v-for="(i, item) in 3" :key="i">
                  <v-card color="#fafafa" data-aos="fade-up" :data-aos-delay="300 + (item*100)" class="mx-3 pb-4" hover flat>
                    <v-img :src="posts.image[item]"></v-img>
                    <v-flex xs12 mx-3 mt-3>
                      <h1 class="title primary--text mb-3">{{ posts.title[item] }}</h1>
                      <p class="font-weight-light">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                      <a class="primary--text" href="">Read More</a>
                    </v-flex>
                  </v-card>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section id="ourTeam">
        <v-container class="px-0" grid-list-xs fill-height>
          <v-layout align-content-start justify-space-around row wrap fill-height>
          <v-flex xs12 mb-5>
            <h1 class="display-2 font-weight-medium d-flex justify-center">Our Team</h1>
          </v-flex>
            <v-flex class="" xs4 v-for="(i, index) in 3" :key="i" data-aos="fade-up" :data-aos-delay="300 + (index*100)" >
              <v-hover>
                <v-card color="#fafafa" slot-scope="{ hover }" class="pa-3 fill-height" flat>
                  <v-img class=" elevation-10" :src="ourTeam.images[index]">
                    <v-expand-transition>
                      <div v-if="hover" class="transition-fast-in-fast-out primary v-card--reveal display-3" style="height: 140px;">
                        <div class="justify-center align-center" style="display: flex;">
                          <div  v-for="icon in icons" :key="icon" xs4>
                            <v-btn class="mx-3" icon>
                              <v-icon color="white" size="24px">{{ icon }}</v-icon>
                            </v-btn>
                          </div>
                        </div>
                        <div class="title font-weight-medium white--text justify-center align-center d-flex pb-2">
                          {{ourTeam.posts[index]}}
                        </div>
                        <div class="title white--text font-weight-bold justify-center align-center d-flex pb-2">
                          {{ourTeam.names[index]}}
                        </div>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-container>
      </section>


    <v-footer dark height="auto">
      <v-card class="flex" flat tile color="primary">
        <v-card-title white--text>
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="primary justify-center subheading">
          &copy; 2018 — <strong class="pl-1">HaritGriha</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
    </v-content>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import AnimatedNumber from "animated-number-vue";
  export default {
    name: 'App',
    components: {
      AnimatedNumber
    },
    data () {
      return {
        insideWhoAreWeSection: false,
        posts: {
          image: [require('./assets/img/img_4.jpg'), require('./assets/img/img_5.jpg'), require('./assets/img/img_6.jpg')],
          title: ['Be A Volunteer Today', 'You May Save The Life of A Child', 'Children That Needs Care']
        },
        navHeader: false,
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        c_items: [
          {
            src: 'https://images.unsplash.com/photo-1558058739-d57e30ecea50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
          },
          {
            src: 'https://images.unsplash.com/photo-1547783877-6b45fe0bdfe4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          },
          {
            src: 'https://images.unsplash.com/photo-1527265715775-fca32a0f9b22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
          }
        ],
        extended: true,
        ourApproach: {
          approaches: 5,
          icons: ['call_split', 'business', 'chat', 'present_to_all', 'email'],
          headings: ['Excellent Educators', 'Progressive Pedagogy', 'Maximising Resources', 'Parents As Partners', 'Accountability'],
          descriptions: [
            'Each Akanksha school builds and develops a team of teachers, a school leader, admin, and a social worker collaborating to run the school.',
            'The Akanksha curriculum and Network Support Team empowers teachers and school leaders with best practices in pedagogy, using a skills-based approach and rigorous standards for student learning.',
            'Each school maximises their use of time, money and materials - creatively leveraging government infrastructure, volunteers and a disciplined approach to managing the cost per child annually of an Akanksha School.',
            'Parents actively engage in the process of their child’s development through programs such as the School Management Committee, parent literacy classes, parent volunteerism and community-wide efforts to address key issues such as women’s empowerment, substance abuse, physical violence and others.',
            'All schools undergo a school development review to assess progress and plan next steps for school development. The review is conducted by the school, the network support team, and external stakeholders. Internal and external student assessments along with biannual performance reviews ensure each stakeholder is being held accountable to student growth.']
        },
        ourTeam : {
          names: ['KIMBERLY TRAN', 'KIMBERLY TRAN', 'KIMBERLY TRAN'],
          posts: ['Manager', 'Manager', 'Manager'],
          images: [
            'https://bootstrapmade.com/demo/themes/eStartup/img/team/1.jpg',
            'https://bootstrapmade.com/demo/themes/eStartup/img/team/2.jpg',
            'https://bootstrapmade.com/demo/themes/eStartup/img/team/3.jpg'
          ]
        },
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-instagram'
        ],
        number: 1321901
        //
      }
    },
    mounted() {
      // console.log('Mounted')
      let scope = this
      scope.$vuetify.theme.primary = '#28a745'
      let navClasses = document.getElementById('navBar').classList;
      let whoAreWeOffset = document.getElementById("whoAreWe").offsetTop;
      
      window.onscroll = function() {
        if(window.scrollY >= 0 && window.scrollY <= 20) {
          // console.log('Im with in 100', window.scrollY)
          // upAction()
          
          navClasses.remove('collapse');
          navClasses.add('open');
          navClasses.add('navbar-transparent')
          navClasses.remove('navbar-white');

        } else if (window.scrollY >= 20 && window.scrollY <= whoAreWeOffset-80) {
        // console.log('whoAreWeOffset elseif', window.scrollY, whoAreWeOffset-80)

          // console.log('Im between 100 and 550', window.scrollY)
          // downAction()

          navClasses.remove('open');
          navClasses.add('collapse');
        } else {
          // console.log('Im more than 550', window.scrollY)
          // upAction()
          
          navClasses.remove('collapse')
          navClasses.add('open')
          navClasses.add('navbar-white')
          navClasses.remove('navbar-transparent')
          scope.insideWhoAreWeSection = true
        }
      };
    },
    methods: {
      formatToPrice(value) {
        // console.log('Value from animate number', value)
        return value.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // console.log('Split', parts)
        // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // return parts[0];
      },
      whoAreWeAnimation() {
        console.log('whoAreWeAnimation')
      }
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Dosis:400,500,600|Overpass:300,400,600&display=swap');

.display-1, .display-3, .subheading, .success-p, .logo, p
{

  font-family: "Overpass", Arial, sans-serif!important;
}

p {
  font-size: 16px!important;
}

.approch-title,
.display-2,
.headline,.title,
.body-1, .body-2, .body-3 {
  font-family: "Dosis", sans-serif!important;
}

.theme--light.application {
    background: #fff!important;
    color: #424242!important
}

section {
  padding: 5rem 0;
  border-bottom: 1px solid #f2f2f2 !important;
}

.align-self-start {
  align-self: flex-start!important;
}

section:nth-child(even) {
  /* min-height: 500px; */
  background: #f9f9f9;
}
/* section:nth-child(even) {
  min-height: 500px;
  background: #F9F9F9;
} */

/*  ---------------- Css for Nav bar  ---------------- */

nav {
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  height: 73px;
  z-index: 2;
}

.collapse {
  -webkit-animation: collapse .5s ease forwards;
          animation: collapse .5s ease forwards;
}

.open {
  -webkit-animation: open .5s ease forwards;
          animation: open .5s ease forwards;
}

.navbar-transparent {
  color: #fff;
  /* background-color: #303a5229 */
}

.navbar-white {
  color: #424242;
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.navbar-list {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.navbar-transparent .scrollactive-item {
  color: #fff!important;
}

.navbar-white .scrollactive-item {
  color: #424242!important;
}

.scrollactive-item {
  text-decoration: none;
}

@-webkit-keyframes collapse {
  from {
    opacity: 1;
    top: 0;
  }
  to {
    opacity: 0;
    top: -73px;
  }
}

@keyframes collapse {
  from {
    opacity: 1;
    top: 0;
  }
  to {
    opacity: 0;
    top: -73px;
  }
}
@-webkit-keyframes open {
  from {
    opacity: 0;
    top: -73px;
  }
  to {
    opacity: 1;
    top: 0;
  }
}
@keyframes open {
  from {
    opacity: 0;
    top: -73px;
  }
  to {
    opacity: 1;
    top: 0;
  }
}

/*  ---------------- Css for Nav bar  ---------------- */


/*  ---------------- Header Images  ---------------- */

.header-image {
  height: 100vh!important;
}

/*  ---------------- Header Image ---------------- */

/*  ---------------- carousel-section ---------------- */

.carousel-section {
  background: #fff!important;
}

/*  ---------------- carousel-section ---------------- */

/*  ---------------- success-stories ---------------- */

.success-stories {
  background-image: url('./assets/img/bg_3.jpg')!important;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: center; 
  padding: 0!important;
}

.success-stories > .overlay-1{
  padding: 5rem 0;
  content: "";
  background: #28a745;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: .85;
  /* z-index: 2; */
}

.success-stories .button {
  width: 300px;
  height: 55px;
}

.success-stories .card {
  border-radius: 3%;
}

.success-stories .success-p {
  letter-spacing: .2em!important;
}
/*  ---------------- success-stories ---------------- */

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

</style>


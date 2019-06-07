<template>
  <v-app>

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
    <nav id="navBar">
      <v-container grid-list-xs class="pa-0 fill-height">
        <v-layout class="fill-height" row>
          <div class="logo mx-3 my-auto headline">
            <span>Harit</span>
            <span class="title font-weight-light">Griha</span>
          </div>

          <div class=" navbar-list body-1 mx-3 my-auto">
            <span class="pa-4">Who Are We</span>
            <span class="pa-4">Our Theory</span>
            <span class="pa-4">Our Approch</span>
          </div>
        </v-layout>
      </v-container>
    </nav>

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

        <v-img class="header-image" :src="require('./assets/img/photo-1485841938031-1bf81239b815.jpeg')" gradient="to top right, rgb(0, 0, 0, .23), rgb(0, 0, 0, .5)">
          <v-layout fill-height align-center column justify-center ma-5>
            <h1 class="display-1 font-weight-light white--text text-xs-center ma-5">We are one of the largest urban networks of public-private partnership schools in India.</h1>
            <!-- <h4 class="subheading white--text">Build your application today!</h4> -->
          </v-layout>
        </v-img>
      <!-- </section> -->

      <section class="first-section">
        <v-container grid-list-xs fill-height>
          <v-layout align-center justify-space-between row fill-height>
            <v-flex md6>
              <!-- <v-card height="340" color="rgb(0, 230, 118, 0.5)" hover flat> -->
              <v-card height="340" color="#fafafa" flat>
                <v-card-title class="fill-height" primary-title>
                  <div class="text-xs-left pa-4">
                    <h1 class="display-1 font-weight-light">Served Over</h1>
                    <h1 class="display-3 font-weight-medium">1,321,901</h1>
                    <h1 class="display-1 font-weight-light">Children in 150 Countries</h1>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex md6 ml-5>
              <h1 class="display-3 font-weight-medium text-xs-left pb-4">Who Are We?</h1>
              <h1 class="font-weight-light text-xs-left">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>

              <p class="text-xs-left font-weight-light pt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container grid-list-xs fill-height>
          <v-layout align-center justify-space-between row fill-height>
            <v-flex md6>
              <h1 class="display-2 font-weight-medium text-xs-right pb-4">Why sustainable living?</h1>
              <h1 class="font-weight-light text-xs-right">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h1>

              <p class="text-xs-right font-weight-light pt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            </v-flex>
            <v-flex md6 ml-5>
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

      <section>
        <v-container class="px-0" grid-list-xs fill-height>
          <v-layout align-content-start row wrap fill-height>
          <v-flex xs12 mb-5>
            <h1 class="display-3 font-weight-medium d-flex justify-center">Our Approch</h1>
          </v-flex>
            <v-flex xs4 v-for="(i, index) in 5" :key="i">
              <v-card color="#fafafa" class="pa-5 fill-height d-flex align-baseline justify-start" flat>
                <!-- <div class="text-xs-center pb-3">
                </div> -->
                <!-- <v-card-title class="d-flex align-baseline" primary-title > -->
                  <v-flex xs2 mr-4>
                    <v-icon size="50">{{ourApproach.icons[index]}}</v-icon>
                  </v-flex>
                  <v-flex class="align-self-start" xs10>
                    <div class="text-xs-left">
                      <h1 class="font-weight-light pb-1">{{ourApproach.headings[index]}}</h1>
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

      <section>
        <v-layout row wrap align-content-center  fill-height>
          <v-flex>
            <h1 class="headline d-flex justify-center">Stats comes here</h1>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in c_items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </section>

      <section>
        <v-container class="px-0" grid-list-xs fill-height>
          <v-layout align-content-start justify-space-around row wrap fill-height>
          <v-flex xs12 pt-3 pb-5>
            <h1 class="display-1 d-flex justify-center">Our Team</h1>
          </v-flex>
            <v-flex class="pa-2 pt-5" xs4 v-for="(i, index) in 3" :key="i">
              <v-hover>
                <v-card  slot-scope="{ hover }" class="pa-3 fill-height" flat>
                  <v-img :src="ourTeam.images[index]">
                    <v-expand-transition>
                      <div v-if="hover" class="transition-fast-in-fast-out white v-card--reveal display-3" style="height: 140px;">
                        <div class="justify-center align-center" style="display: flex;">
                          <div  v-for="icon in icons" :key="icon" xs4>
                            <v-btn class="mx-3" icon>
                              <v-icon size="24px">{{ icon }}</v-icon>
                            </v-btn>
                          </div>
                        </div>
                        <div class="body-2 justify-center align-center d-flex pb-2">
                          {{ourTeam.posts[index]}}
                        </div>
                        <div class="body-2 justify-center align-center d-flex pb-2">
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
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
    </v-content>
  </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  export default {
    name: 'App',
    components: {
      // HelloWorld
    },
    data () {
      return {
        navHeader: false,
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        c_items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        landingPhoto: require('./assets/img/ZkFmQmNccw.jpg'),
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
          posts: ['manager', 'manager', 'manager'],
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
        ]
        //
      }
    },
    mounted() {
      console.log('Mounted')
      let scope = this
      let navClasses = document.getElementById('navBar').classList;
      window.onscroll = function() {
        if(window.scrollY >= 0 && window.scrollY <= 20) {
          console.log('Im with in 100', window.scrollY)
          // upAction()
          
          navClasses.remove('collapse');
          navClasses.add('open');
          navClasses.add('navbar-transparent')
          navClasses.remove('navbar-white');

        } else if (window.scrollY >= 20 && window.scrollY <= 550) {
          console.log('Im between 100 and 550', window.scrollY)
          // downAction()

          navClasses.remove('open');
          navClasses.add('collapse');
        } else if (window.scrollY >= 550){
          console.log('Im more than 550', window.scrollY)
          // upAction()
          
          navClasses.remove('collapse');
          navClasses.add('open');
          navClasses.add('navbar-white')
        }


        function downAction() {
          console.log('downAction')
          navClasses.remove('open');
          navClasses.add('collapse');
        }

        function upAction() {
          console.log('upAction')
          navClasses.remove('collapse');
          navClasses.add('open');
        }

        // window.addEventListener("scroll", function() {
        //   scrollDetect(homeAction, downAction, upAction);
        // });

      };
    },
    methods: {
    }
  }
</script>

<style>

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

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

</style>


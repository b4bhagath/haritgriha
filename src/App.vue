<template>
  <v-app>

    <!-- <v-toolbar class="headline" fixed>
      
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

    <div class="topNav">
      <h1>Animated Fixed topNav (Scroll Down)</h1>
    </div>
    <v-content>

      <!-- <div class="hidden-sm-and-down" style="padding-top: 130px;"></div>
      <div class="hidden-md-and-up" style="padding-top: 110px;"></div> -->
      
      <section>
        <v-parallax class="fill-height" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-layout align-center column justify-center>
            <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
            <h4 class="subheading">Build your application today!</h4>
          </v-layout>
        </v-parallax>
      </section>

      <section class="first-section" >
        <v-container grid-list-xs fill-height>
          <v-layout align-center justify-center row fill-height>
            <v-flex xs8>
              <v-card height="600" flat>
                <v-card-title class="fill-height" primary-title>
                  <div class="pa-4 text-xs-left">
                    <p class="pb-4 px-4 mx-5 title font-weight-thin"> Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel.</p>
                    <p class="pb-4 px-4 mx-5 title font-weight-thin"> Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque.</p>
                    <p class="pb-4 px-4 mx-5 title font-weight-thin"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum, dicta a cumque qui vitae saepe nesciunt, atque quos repudiandae quis perspiciatis expedita soluta esse quasi aliquid eum nostrum sed, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>

        <v-layout row wrap align-content-center  fill-height>
          <v-flex>
            <h1 class="headline d-flex justify-center">Our Theory for the Organization</h1>
          </v-flex>
        </v-layout>
      </section>

      <section class="s_ourApproch">
        <v-container class="px-0" grid-list-xs fill-height>
          <v-layout align-content-start justify-space-around row wrap fill-height>
          <v-flex xs12 pt-3 pb-5>
            <h1 class="display-1 d-flex justify-center">Our Approch</h1>
          </v-flex>
            <v-flex class="pa-2 pt-5" xs4 v-for="(i, index) in 5" :key="i">
              <v-card  color="#F9F9F9" class="pa-3 fill-height" flat>
                <div class="text-xs-center pb-3">
                  <v-icon large color="blue-grey darken-2">{{ourApproach.icons[index]}}</v-icon>
                </div>
                <v-card-title primary-title>
                  <div class="text-xs-center">
                    <h1 class="title pb-3">{{ourApproach.headings[index]}}</h1>
                    <p class="body-1 mb-0">
                      {{ourApproach.descriptions[index]}}
                    </p>
                  </div>
                </v-card-title>
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
          headings: ['Excellent Educators', 'Progressive Pedagogy', 'Maximising Resources', 'Parents As Partners', 'Accountability to Learning'],
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
      window.onscroll = function() {
        
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          
        } else {
          
        }
      };
    },
    methods: {
    }
  }
</script>

<style>

.topNav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #cc5350;
    color:#fff;
    z-index: 1000;
    height: 200px;
    overflow: hidden;
    -webkit-transition: height 0.3s;
    -moz-transition: height 0.3s;
    transition: height 0.3s;
    text-align:center;
    line-height:160px;

}
.topNav.shrink {
    height: 100px;
    line-height:80px;
    background: white;
}
.topNav h1
{
    font-size:30px;
    font-weight:normal;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
}

.topNav.shrink h1
{
    font-size:24px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    color: black;
}
.content
{
height:2000px;
 /*just to get the page to scroll*/
}

.s_ourApproch p {
  line-height: 28px!important;
}

.first-section {
  /* background-image: url('./assets/img/Spiral_Abstract_Seamless_Pattern/Spiral Abstract Seamless Pattern.svg')!important;
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-repeat: initial;
  background-size: contain;
  border: 1px solid red; */
}

section:nth-child(odd) {
  min-height: 500px;
  background: #fff;
}
section:nth-child(even) {
  min-height: 500px;
  background: #F9F9F9;
}

.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

</style>


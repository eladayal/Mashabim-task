<template>
  <section>
    <AppBar :questionIdx="questionIdx" :questions="questions" />
    <main>
      <AnswerList v-if="currQuestion" :currQuestion="currQuestion" />
    </main>
  </section>
</template>

<script >
import {questionService} from "@/services/question-service.js";

import AnswerList from "@/cmps/AnswerList.vue";
import AppBar from "@/cmps/AppBar.vue";

export default {
  data(){
    return{
      questionIdx:3,
      questions:null,
      currQuestion:null
    }
  },
  async created(){
    this.questions = await questionService.getQuestions()
    this.getQuestion()
  },
  components: {
    AnswerList,
    AppBar,
  },
  methods:{
    getQuestion(){
      this.currQuestion = this.questions.find(question=> question.idx === this.questionIdx)      
    }
  }
};
</script>


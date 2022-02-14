  <template>
  <section className="answer-list">
    <div className="answer-list-container main-layout">
      <div class="question-container">
        <p class="question">שאלה {{ currQuestion.idx }}</p>
        <p class="question-txt">
          {{ currQuestion.txt }}
        </p>
      </div>

      <div class="channels-container">
        <div v-for="answer in currQuestion.answers" :key="answer.icon">
          <Channel
            :answer="answer"
            :answers="answers"
            @click="addToAnswers(answer.title)"
          />
        </div>
      </div>

      <div class="btns-container flex row space-evenly">
        <button class="btn-style">אחורה</button>
        <button :disabled="isDisabled" class="btn-style full">לשלב הבא</button>
      </div>
    </div>
  </section>
</template>
<script>

import Channel from "./Channel.vue";

const NONE = "אין לי";

export default {
  props: {
    currQuestion: Object,
  },
  data() {
    return {
      answers: [],
    };
  },
  components: {
    Channel,
  },
  methods: {
    //toggling selected answers 
    addToAnswers(title) {
     
      if (title === NONE) {
        this.answers.includes(NONE)
          ? (this.answers = [])
          : this.answers.splice(0, this.answers.length, title);
        return;
      }
      if (this.answers.includes(title)) {
        const idx = this.answers.findIndex((answer) => answer === title);
        this.answers.splice(idx, 1);
      } else if (this.answers.includes(NONE)) {
        this.answers.splice(0, 1, title);
        return;
      } else this.answers.push(title);
    },
  },
  computed: {
    isDisabled() {
      return !(this.answers.length > 0)
    },
  },
};
</script>
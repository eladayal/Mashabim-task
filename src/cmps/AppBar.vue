<template>
  <section class="app-bar">
    <div class="app-bar-container main-layout">
      <div class="question-bar-container flex row">
        <div
          v-for="question in questions"
          :key="question.idx"
          class="question-bar"
          :class="getStageProgress(question.idx)">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    questionIdx: Number,
    questions: Array,
  },
  
  methods: {
    getStageProgress(idx) {
      return this.questionIdx >= idx ? "marked" : "";
    },
  },
};
</script>


  
  <template>
  <section class="channel flex-column-center" :class="checkIsMarked">
    <img :src="`img/${answer.icon}.png`" alt="" />
    <p>{{ answer.title }}</p>
  </section>
</template>
<script >
export default {
  props: {
    answer: Object,
    answers: Array,
  },
  computed: {
    checkIsMarked() {
      if (this.answers.includes(this.answer.title)) return "marked";
    },
  },
};
</script>

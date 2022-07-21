import { defineComponent } from "vue";
import Task from "../../models/Task";
 
export default defineComponent({
 name: "Home",
 data() {
   return {
     tasks: [] as Task[]
   };
 },
 methods: {
   setTaskComplete(task: Task): void {
     console.log("complete");
     this.$store.commit("completeTask", task);
   },
   deleteTask(task: Task) {
     console.log("delete");
     this.$store.commit("deleteTask", task);
   }
 },
 mounted() {
   this.tasks = this.$store.state.tasks;
 }
});
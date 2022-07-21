import { defineComponent } from "vue";
import { Store } from "vuex";
import Task from "../../models/Task";
export default defineComponent({
    name: "AddTask",
    data() {
        return {
            taskName: ""
        }
    },
    methods:{
        addTask(): void{
            if (this.taskName != "") {
                const newTask = new Task(this.taskName);
                this.$store.commit('setTask', newTask);
                this.taskName = "";
                this.$router.push("/")
            }
        }
    }
})
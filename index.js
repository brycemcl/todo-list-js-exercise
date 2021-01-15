const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logState: function() {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed.`
      );
    },
    markCompleted: function() {
      this.complete = true;
    },
  };
  return task;
};

const task1 = newTask(
  "Do the dishes",
  "Don't forget to put away the dry stuff!"
);
const task2 = newTask("Wash sheets", "Hang the delicates to dry.");
const task3 = newTask(
  "Clean bathroom",
  "Scrub down the tub and sink, wipe the mirrors, sweep the floor."
);

const tasks = [task1, task2, task3];

task1.logState();
console.log(tasks);
task1.markCompleted();
console.log(tasks);

import { ITask } from "./ITask";

export function processTask(task: ITask) {
  // - usar getType()
  const type = task.getType();
  // - aplicar lógica diferente conforme tipo

  if (type === "Bug") {
    console.log(`Processing Bug Task: ${task.title}`);
  } else if (type === "Feature") {
    console.log(`Processing Feature Task: ${task.title}`);
  } else {
    console.log(`Processing Unknown Task Type: ${task.title}`);
  }
  //substituido pelo switch case
  switch (type) {
    case "Bug":
      console.log(`Processing Bug Task: ${task.title}`);
      break;
    case "Feature":
      console.log(`Processing Feature Task: ${task.title}`);
      break;
    default:
      console.log(`Processing Unknown Task Type: ${task.title}`);
      break;
  }
}

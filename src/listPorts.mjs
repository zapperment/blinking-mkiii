import easymidi from "easymidi";

const inputs = easymidi.getInputs();

console.log("Available input ports:");
for (const input of inputs.sort()) {
  console.log(`- ${input}`);
}

const outputs = easymidi.getOutputs();

console.log("\nAvailable output ports:");
for (const output of outputs.sort()) {
  console.log(`- ${output}`);
}

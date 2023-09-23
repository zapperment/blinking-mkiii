import { Input, Output } from "easymidi";
import initialisePort from "./initialisePort.mjs";

const input = initialisePort(Input, {
  envKey: "MIDI_IN",
  prettyName: "MIDI in port",
});

const output = initialisePort(Output, {
  envKey: "MIDI_OUT",
  prettyName: "MIDI out port",
});

console.log("Success");

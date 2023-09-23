function initialisePort(Port, { envKey, prettyName }) {
  const portName = process.env[envKey];

  if (!portName) {
    console.error(`No ${prettyName} name was specified!`);
    console.log("How to fix this:");
    console.log("- copy the file .env.example to .env");
    console.log(
      `- edit the ${envKey} value in the file according to your setup`,
    );
    console.log(
      "- hint: run 'yarn list-ports' to see which ports are available",
    );
    process.exit(1);
  }

  console.log(`Using ${prettyName} ${portName}`);

  try {
    return new Port(portName);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

export default initialisePort;

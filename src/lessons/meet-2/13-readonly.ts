type Config = {
  readonly host: string;
  readonly port: number;
};

const config: Config = {
  host: "localhost",
  port: 8080,
};

console.log("Config:", config);
// config.host = "127.0.0.1"; // ❌ Error: properti readonly tidak bisa diubah

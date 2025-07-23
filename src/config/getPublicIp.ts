import https from "https";

export function getPublicIP(): void {
  https
    .get("https://api.ipify.org?format=json", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const ip = JSON.parse(data).ip;
          console.log(`🌐 Tu IP pública es: ${ip}`);
        } catch {
          console.log("⚠️ No se pudo obtener la IP pública");
        }
      });
    })
    .on("error", (err) => {
      console.log("⚠️ Error al obtener IP pública:", err.message);
    });
}

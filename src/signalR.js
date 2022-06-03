import { HubConnectionBuilder } from "@microsoft/signalr";
import { HttpTransportType } from "@microsoft/signalr";

class SignalRConnection {
  connect() {
    return new HubConnectionBuilder()
      .withUrl("https://azure-blob-api.azure-api.net/Service", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();
  }
}
export default new SignalRConnection();

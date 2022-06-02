import { HubConnectionBuilder } from "@microsoft/signalr";
import { HttpTransportType } from "@microsoft/signalr";

class SignalRConnection {
  connect() {
    return new HubConnectionBuilder()
      .withUrl("{localhost}", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();
  }
}
export default new SignalRConnection();

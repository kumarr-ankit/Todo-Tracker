import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;

public class NoteServer {

    public static void main(String[] args) throws IOException {
        // 1️⃣ Create server on port 8080
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // 2️⃣ /hello endpoint
        server.createContext("/hello", (HttpExchange exchange) -> {
            try {
                String response = "Hello World from Java server!";
                exchange.getResponseHeaders().add("Content-Type", "text/plain");
                exchange.sendResponseHeaders(200, response.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        // 3️⃣ /notes endpoint
        server.createContext("/notes", (HttpExchange exchange) -> {
            try {
                // Read JSON file
                Path filePath = Path
                        .of("C:/Users/ankit/OneDrive/Desktop/Ankit/TodoTracker/Todo-Tracker/public/Data.json"); // your
                                                                                                                // file
                                                                                                                // path
                String json = Files.readString(filePath);

                // CORS header for React fetch
                exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
                exchange.getResponseHeaders().add("Content-Type", "application/json");

                // Send response
                exchange.sendResponseHeaders(200, json.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(json.getBytes());
                os.close();

                System.out.println("JSON served successfully!");
            } catch (Exception e) {
                // Send error response
                String error = "{\"error\":\"Could not read file\"}";
                exchange.getResponseHeaders().add("Content-Type", "application/json");
                exchange.sendResponseHeaders(500, error.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(error.getBytes());
                os.close();

                e.printStackTrace();
            }
        });

        // 4️⃣ Start server
        server.start();
        System.out.println("Server started at http://localhost:8080/");
    }
}

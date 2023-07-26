import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./App.module.scss";
import SqlQueryView from "./containers/SqlQueryView";

const newQueryClient = new QueryClient();

function App() {
  return (
    <div className={styles.app}>
      <QueryClientProvider client={newQueryClient}>
        <SqlQueryView />
      </QueryClientProvider>
    </div>
  );
}

export default App;

import { useAuth } from "./context/auth";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { ProjectListScreen } from "./screens/project-list";

import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* {user ? <AuthenticatedApp /> : <UnauthenticatedApp />} */}
      <ProjectListScreen />
    </div>
  );
}

export default App;

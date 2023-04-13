import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import InviteFriends from "./Components/InviteFriends";
import Store from "./Components/Store";
import ContactSection from "./Components/ContactSection";

function App() {
  return (
    <div>
      <NavBar />
      <Card>
          <Login />
          <InviteFriends />
      </Card>
      <Store />
      <ContactSection />
    </div>
  );
}

export default App;

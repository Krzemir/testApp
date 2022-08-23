import Container from "./components/Container/Container";
import Hero from "./components/Hero/Hero";
import List from "./components/List/List";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {
  return (
  <Container>
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
  </Container>

  );
};

export default App;

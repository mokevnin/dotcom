import { Container, MantineProvider, Text, Title } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <header>
        <Container>
          <Title order={1}>Заголовок страницы</Title>
          <Text size="lg">Описание страницы, которое позже заменишь</Text>
        </Container>
      </header>

      <main>
        <Container>
          <section>
            <Title order={2}>Раздел 1</Title>
            <Text>
              Здесь будет основной текст первого раздела. Используй заполнители,
              которые заменишь в будущем.
            </Text>
          </section>

          <section>
            <Title order={2}>Раздел 2</Title>
            <Text>
              Здесь разместишь описание второго раздела. Текст для замены.
            </Text>
          </section>
        </Container>
      </main>

      <footer>
        <Container>
          <Text size="sm">© 2025 Placeholder company. Все права защищены.</Text>
        </Container>
      </footer>
    </MantineProvider>
  );
}

export default App;

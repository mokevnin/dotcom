import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutube,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import CodeBasicsImage from "./assets/code-basics.webp";
import CodeBattleImage from "./assets/codebattle.webp";
import HexletImage from "./assets/hexlet.webp";
import MeImage from "./assets/me.webp";

const projects = [
  {
    title: "Hexlet",
    url: "https://hexlet.io",
    image: HexletImage,
  },
  {
    title: "Code Basics",
    url: "https://code-basics.com",
    image: CodeBasicsImage,
  },
  {
    title: "Codebattle",
    url: "https://codebattle.hexlet.io",
    image: CodeBattleImage,
  },
];

const socials = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mokevnin",
    Icon: IconBrandLinkedin,
  },
  { label: "X", url: "https://x.com/mokevnin", Icon: IconBrandX },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@mokevnin",
    Icon: IconBrandYoutube,
  },
  { label: "Telegram", url: "https://t.me/orgprog", Icon: IconBrandTelegram },
];

const gradient = { from: "blue", to: "cyan" };
const currentYear = new Date().getFullYear();

function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const isDark = computed === "dark";

  return (
    <ActionIcon
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      size="lg"
      color="gray"
      variant="subtle"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <IconSun size={18} stroke={1.5} /> : <IconMoon size={18} stroke={1.5} />}
    </ActionIcon>
  );
}

function App() {
  return (
    <>
      <Container size="md" pt={{ base: 40, sm: 100 }} pb={60}>
        <Stack mb="xl">
          <Avatar src={MeImage} alt="Kirill Mokevnin" size={96} />
          <Title order={1} fz={{ base: 34, sm: 50 }} lh={1.15}>
            Hi, I'm Kirill —{" "}
            <Text component="span" variant="gradient" gradient={gradient} inherit>
              Web Developer
            </Text>{" "}
            for EdTech
          </Title>

          <Text fz={{ base: "lg", sm: "h2" }} c="dimmed">
            I build custom web applications for education technology projects worldwide
          </Text>
        </Stack>

        <Group>
          <Button
            component="a"
            href="https://github.com/mokevnin"
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            variant="default"
            leftSection={<IconBrandGithub size={20} />}
          >
            GitHub
          </Button>
          <Button
            component="a"
            href="mailto:mokevnin@gmail.com"
            size="xl"
            variant="gradient"
            gradient={gradient}
          >
            Contact Me
          </Button>
        </Group>
      </Container>

      <Container size="md" mb="xl" component="section" aria-label="Projects">
        <Carousel
          withIndicators
          slideGap="md"
          styles={{
            indicator: { backgroundColor: "var(--mantine-color-blue-filled)" },
          }}
          emblaOptions={{ loop: true, align: "center" }}
        >
          {projects.map((project) => (
            <Carousel.Slide key={project.title}>
              <Anchor
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — ${project.url}`}
              >
                <Image src={project.image} alt={`${project.title} screenshot`} fit="cover" />
              </Anchor>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>

      <Container size="md" component="footer" py="md">
        <Group justify="space-between" wrap="nowrap">
          <Text size="sm" c="dimmed">
            © {currentYear} Kirill Mokevnin
          </Text>
          <Group gap={0} wrap="nowrap">
            {socials.map(({ label, url, Icon }) => (
              <ActionIcon
                key={label}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                size="lg"
                color="gray"
                variant="subtle"
              >
                <Icon size={18} stroke={1.5} />
              </ActionIcon>
            ))}
            <ColorSchemeToggle />
          </Group>
        </Group>
      </Container>
    </>
  );
}

export default App;

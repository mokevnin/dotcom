import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import MeImage from "./assets/me.png";
import HexletImage from "./assets/hexlet.png";
import CodeBasicsImage from "./assets/code-basics.png";
import CodeBattleImage from "./assets/codebattle.png";

const carouselData = [
  {
    image: HexletImage,
    title: "hexlet.io",
  },
  {
    image: CodeBasicsImage,
    title: "code-basics.com",
  },
  {
    image: CodeBattleImage,
    // title: "code-basics.com",
  },
];

function App() {
  const slides = carouselData.map((item) => (
    <Carousel.Slide key={item.title}>
      <Image src={item.image} fit="cover" />
      {/* {item.title} */}
      {/* <CarouselCard {...item} /> */}
    </Carousel.Slide>
  ));

  return (
    <>
      <Container size="md" py={100}>
        <Stack my="xl">
          <Avatar src={MeImage} size="lg" />
          <Title order={1} fz={50}>
            Hi, I'm Kirill —{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              inherit
            >
              Web Developer
            </Text>{" "}
            for EdTech
          </Title>

          <Text fz="h2" c="dimmed">
            I build custom web applications for education technology projects
            worldwide
          </Text>
        </Stack>

        <Group>
          <Button
            component="a"
            href="https://github.com/mokevnin"
            target="_blank"
            size="xl"
            variant="default"
            leftSection={<IconBrandGithub size={20} />}
          >
            GitHub
          </Button>
          <Button
            size="xl"
            component="a"
            href="mailto:mokevnin@gmail.com"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Contact Me
          </Button>
        </Group>
      </Container>

      <Container size="md" mb="xl">
        <Carousel
          withIndicators
          // height={200}
          emblaOptions={{
            loop: true,
            // dragFree: false,
            align: "center",
          }}
          // slideSize={{ base: "100%", sm: "50%" }}
          // slideGap={2}
          // emblaOptions={{ align: "start" }}
        >
          {slides}
        </Carousel>
      </Container>

      <Box>
        <Container>
          {/* <MantineLogo size={28} /> */}
          <Group gap={0} justify="flex-end" wrap="nowrap">
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/mokevnin/"
              target="_blank"
              size="lg"
              color="gray"
              variant="subtle"
            >
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://twitter.com/mokevnin"
              target="_blank"
              size="lg"
              color="gray"
              variant="subtle"
            >
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://www.youtube.com/@mokevnin"
              target="_blank"
              size="lg"
              color="gray"
              variant="subtle"
            >
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://t.me/orgprog"
              target="_blank"
              size="lg"
              color="gray"
              variant="subtle"
            >
              <IconBrandTelegram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </Box>
    </>
  );
}

export default App;

import {
    ActionIcon,
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
    IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

import MeImage from "./assets/me.png";

function App() {
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
            size="xl"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Projects
          </Button>

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
        </Group>
      </Container>

      <Box>
        <Container>
          {/* <MantineLogo size={28} /> */}
          <Group gap={0} justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </Box>
    </>
  );
}

export default App;

import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import router, { useRouter } from "next/router";
import NextLink from "next/link";
import NextImage from "next/image";

export default function WithSubnavigation({
  NAV_ITEMS,
  page,
}: {
  NAV_ITEMS: Array<NavItem>;
  page: String;
}) {
  const { isOpen, onToggle } = useDisclosure();

  const DesktopNav = () => {
    const linkColor = "#B0B0B0";
    const linkHoverColor = "white";
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
      <>
        <Stack direction={"row"} spacing={8}>
          {NAV_ITEMS.map((navItem: NavItem) => {
            if (navItem.label == "Join the team") return;
            return (
              <Box key={navItem.label}>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Link
                      p={2}
                      fontSize={"lg"}
                      fontWeight={500}
                      color={linkColor}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                      }}
                      onClick={() => {
                        if (navItem.href[0] === "#") {
                          const element = document.querySelector(
                            `${navItem.href}`
                          );
                          element?.scrollIntoView({ behavior: "smooth" });
                        } else {
                          router.push(navItem.href);
                        }
                      }}
                    >
                      {navItem.label}
                    </Link>
                  </PopoverTrigger>
                  {navItem.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={"xl"}
                      bg={popoverContentBgColor}
                      p={4}
                      rounded={"xl"}
                      minW={"sm"}
                    >
                      <Stack>
                        {navItem.children.map((child) => (
                          <DesktopSubNav key={child.label} {...child} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            );
          })}
        </Stack>
      </>
    );
  };

  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={"group"}
        display={{ base: "none", lg: "block" }}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
              fontSize={["md", "lg", "lg", "lg"]}
              whiteSpace={"nowrap"}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{
              opacity: "100%",
              transform: "translateX(0)",
            }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };

  const MobileNav = () => {
    return (
      <Stack bg={"rgba(0,0,0,0.4)"} p={4} display={{ lg: "none" }}>
        {NAV_ITEMS.map((navItem: NavItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            fontSize={{ base: "16px", sm: "18px" }}
            color={"white"}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  return (
    <Box position="static" width={"100%"} h={"fit-content"} zIndex={1}>
      <Flex
        bg={
          page === "index"
            ? "rgba(30, 30, 30, 0.6)"
            : "linear-gradient(180deg,rgba(30, 30, 30, 0.6)  0%,rgba(30, 30, 30, 0.6)  50%,rgba(73, 76, 94, 0.6)  100%)"
        }
        color={"#F2F6F9"}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        direction={{ base: "row-reverse", lg: "row" }}
      >
        <Flex
          flex={{ base: 1, lg: "auto" }}
          // ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
          flexGrow={0}
          justify={{ base: "end" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              bg: "black",
            }}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "start", lg: "space-between" }}
          align="center"
          gap={{ base: "8px" }}
        >
          <Box
            textAlign={useBreakpointValue({
              base: "center",
              lg: "left",
            })}
            fontFamily={"heading"}
            color={"#F2F6F9"}
            w={150}
          >
            <NextLink href="/">
              <Box
                w={[125, 150, 150, 150]}
                h={[34.76, 41.71, 41.71, 41.71]}
                position="relative"
              >
                <NextImage
                  src="/images/logo-white.svg"
                  alt="The Opprtunities Portal logo"
                  fill
                  priority
                  sizes="(max-width: 0px) 125px, (max-width: 500px) 150px"
                />
              </Box>
            </NextLink>
          </Box>

          <Flex display={{ base: "none", lg: "flex" }} align={"center"} ml={10}>
            <DesktopNav />
          </Flex>
          <DesktopSubNav label="Get started" href="/dashboard" />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: string;
}

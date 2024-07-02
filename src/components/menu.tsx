import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Menu() {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4 py-8">
      <MenubarMenu>
        <MenubarTrigger className="font-bold text-xl bg-transparent bg-none">Shadcommerce</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About Us</MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>
            Blog  <MenubarShortcut>Coming soon</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Contact <MenubarShortcut>Coming soon</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Careers <MenubarShortcut>Coming soon</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

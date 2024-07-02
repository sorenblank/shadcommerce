import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl mx-auto py-6">
      <div className="grid gap-4">
        <Image
          src="/placeholder.svg"
          alt="Product Image"
          width={500}
          height={500}
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        />
      </div>
      <div className="grid gap-4 items-start">
        <h1 className="font-bold text-3xl">Cool Product</h1>
        <div className="text-4xl font-bold">$99</div>
        <div>
          <p>
            This is a cool product. It is made of high-quality materials and can last for a long time. It is perfect for
            your needs.
          </p>
        </div>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="color" className="text-base">
              Color
            </Label>
            <RadioGroup id="color" defaultValue="black" className="flex items-center gap-2">
              <Label
                htmlFor="color-black"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="color-black" value="black" />
                Black
              </Label>
              <Label
                htmlFor="color-white"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="color-white" value="white" />
                White
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base">
              Size
            </Label>
            <RadioGroup id="size" defaultValue="m" className="flex items-center gap-2">
              <Label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-s" value="s" />
                Small
              </Label>
              <Label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-m" value="m" />
                Medium
              </Label>
              <Label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-l" value="l" />
                Large
              </Label>
            </RadioGroup>
          </div>
          <Button size="lg">Add to cart</Button>
        </form>
      </div>
    </div>
  )
}